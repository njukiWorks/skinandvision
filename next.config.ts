import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/nieuws", destination: "/blog", permanent: true },
      { source: "/nieuws/:path*", destination: "/blog", permanent: true },
      // English ad URLs → actual EN routes
      { source: "/en/treatments/eyelid-surgery", destination: "/en/behandelingen/ooglidcorrectie", permanent: true },
      { source: "/en/treatments/botox", destination: "/en/behandelingen/botoxbehandelingen", permanent: true },
      { source: "/en/treatments/ptosis", destination: "/en/behandelingen/ptosis-correctie", permanent: true },
      { source: "/en/treatments/:slug*", destination: "/en/behandelingen/:slug*", permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
