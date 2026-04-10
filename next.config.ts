import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io", // Replace with your ImageKit hostname
        port: "",
        pathname: "/crewbasesol/**", // Replace with your ImageKit ID and potentially a path prefix
      },
    ],
  },
};

export default nextConfig;
