/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/bar-ze-smakiem',
  assetPrefix: '/bar-ze-smakiem',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
