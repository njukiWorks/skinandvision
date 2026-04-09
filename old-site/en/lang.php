<?php
session_start();

// --- Language Detection + Switching ---
$currentPath = $_SERVER['REQUEST_URI'];

// If user manually switches language via ?lang=
if (isset($_GET['lang'])) {
    $lang = ($_GET['lang'] === 'nl') ? 'nl' : 'en';
    setcookie("lang", $lang, time() + (86400 * 30), "/"); // Save for 30 days

    // Parse URL and remove lang from query
    $parsedUrl = parse_url($currentPath);
    $path = $parsedUrl['path'];
    parse_str(isset($parsedUrl['query']) ? $parsedUrl['query'] : '', $queryParams);
    unset($queryParams['lang']); // Remove lang to prevent loop
    $query = http_build_query($queryParams);
    $query = $query ? '?' . $query : '';

    // If switching to English → ensure /en/ prefix
    if ($lang === "en" && strpos($path, "/en/") !== 0) {
        $path = "/en" . $path;
    }
    // If switching to Dutch → remove /en/
    if ($lang === "nl") {
        $path = str_replace("/en/", "/", $path);
    }

    header("Location: " . $path . $query);
    exit();
}

// Determine language (default = Dutch)
$currentLang = "nl";
// If cookie exists, use it
if (isset($_COOKIE['lang'])) {
    $currentLang = $_COOKIE['lang'];
} else {
    setcookie("lang", $currentLang, time() + (86400 * 30), "/");
}

// Pages under /en/ are always English
$currentLang = "en";

// Auto-redirect only if necessary
$hasEnPrefix = strpos($currentPath, "/en/") === 0;
if (!$hasEnPrefix) {
    header("Location: /en" . $currentPath);
    exit();
}
