import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["res.cloudinary.com"],
  },
  remotePatterns: [
    {
      protocol: "https",
      hostname: "i.scdn.co",
    },
    {
      protocol: "https",
      hostname: "mosaic.scdn.co",
    },
  ],
};

export default nextConfig;
