import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 💥 CLAVE
  trailingSlash: true, // opcional
};

export default nextConfig;
