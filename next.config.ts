import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Allow loading images from the project's S3 bucket and common CDNs
    remotePatterns: [
      {
        protocol: "https",
        hostname: "chihili-bucket.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "cdn.example.com",
      },
    ],
  },
};

export default nextConfig;
