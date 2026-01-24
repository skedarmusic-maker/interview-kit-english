import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vz-5af29887-36d.b-cdn.net",
      },
    ],
  },
};

export default nextConfig;
