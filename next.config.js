/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [['@swc-jotai/react-refresh', {}]],
  },
  reactStrictMode: false,
  output: 'standalone',
};

module.exports = nextConfig;
