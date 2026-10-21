import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder photos (same Unsplash images the WordPress theme falls back to).
    // Remove this once every image is a local file in /public/images.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
