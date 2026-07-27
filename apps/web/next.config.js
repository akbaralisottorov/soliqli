/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@soliqly/ui", "@soliqly/types"],
};

module.exports = nextConfig;
