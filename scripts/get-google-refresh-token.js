#!/usr/bin/env node
/**
 * Generate a Google OAuth2 Refresh Token for Google Ads API access.
 *
 * Usage:
 *   node scripts/get-google-refresh-token.js
 *
 * After running, copy the printed GOOGLE_ADS_REFRESH_TOKEN into .env.local
 */

const http = require('http');
const { exec } = require('child_process');
const { readFileSync } = require('fs');
const path = require('path');

// --- Load credentials ---
const credsPath = path.resolve(__dirname, '../credentials.json');
let creds;
try {
  creds = JSON.parse(readFileSync(credsPath, 'utf-8'));
} catch (e) {
  console.error('❌ Could not read credentials.json:', e.message);
  process.exit(1);
}

const { client_id, client_secret } = creds.installed;

// Google Ads scope
const SCOPE = 'https://www.googleapis.com/auth/adwords';
const PORT = 3000;
const REDIRECT_URI = `http://localhost:${PORT}`;

// Build the authorization URL
const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
authUrl.searchParams.set('client_id', client_id);
authUrl.searchParams.set('redirect_uri', REDIRECT_URI);
authUrl.searchParams.set('response_type', 'code');
authUrl.searchParams.set('scope', SCOPE);
authUrl.searchParams.set('access_type', 'offline');
authUrl.searchParams.set('prompt', 'consent'); // force refresh_token to be returned

console.log('\n🔐 Google Ads OAuth2 Refresh Token Generator\n');
console.log('Opening browser for authorization...');
console.log(`\nIf the browser does not open, visit this URL manually:\n\n  ${authUrl.toString()}\n`);

// Try to open the browser
const openCmd =
  process.platform === 'win32'
    ? `start "" "${authUrl}"`
    : process.platform === 'darwin'
    ? `open "${authUrl}"`
    : `xdg-open "${authUrl}" 2>/dev/null || echo "(could not auto-open browser)"`;
exec(openCmd);

// Start a local HTTP server to catch the redirect
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');

  if (error) {
    res.writeHead(400, { 'Content-Type': 'text/html' });
    res.end(`<h2>Authorization failed: ${error}</h2><p>You can close this tab.</p>`);
    server.close();
    console.error('\n❌ Authorization denied:', error);
    process.exit(1);
  }

  if (!code) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<p>Waiting for authorization...</p>');
    return;
  }

  // Exchange the code for tokens
  try {
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id,
        client_secret,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code',
      }).toString(),
    });

    const tokens = await tokenRes.json();

    if (tokens.error) {
      throw new Error(`${tokens.error}: ${tokens.error_description}`);
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <h2>✅ Authorization successful!</h2>
      <p>You can close this tab and return to the terminal.</p>
    `);

    console.log('\n✅ Tokens received!\n');
    console.log('─────────────────────────────────────────────');
    console.log('Add these to your .env.local:\n');
    console.log(`GOOGLE_ADS_CLIENT_ID=${client_id}`);
    console.log(`GOOGLE_ADS_CLIENT_SECRET=${client_secret}`);
    if (tokens.refresh_token) {
      console.log(`GOOGLE_ADS_REFRESH_TOKEN=${tokens.refresh_token}`);
    } else {
      console.warn('\n⚠️  No refresh_token in response.');
      console.warn('   This can happen if the account was already authorized.');
      console.warn('   Go to https://myaccount.google.com/permissions and revoke');
      console.warn('   access for this app, then run this script again.\n');
    }
    console.log('─────────────────────────────────────────────\n');

  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/html' });
    res.end(`<h2>Token exchange failed</h2><pre>${err.message}</pre>`);
    console.error('\n❌ Token exchange failed:', err.message);
  }

  server.close();
});

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT} for the OAuth callback...\n`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n❌ Port ${PORT} is already in use. Close the process using it and try again.`);
  } else {
    console.error('\n❌ Server error:', err.message);
  }
  process.exit(1);
});
