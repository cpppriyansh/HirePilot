/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    return config;
  },
  // This makes sure your path aliases in tsconfig.json work in Next.js
  // No need to manually configure webpack aliases as they're automatically handled by Next.js
};

module.exports = nextConfig;
