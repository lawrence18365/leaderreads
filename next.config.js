/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['leaderreads.info'],
  },
  assetPrefix: '/leaderreads/', // Replace 'leaderreads' with your repo name if different
  basePath: '/leaderreads', // Replace 'leaderreads' with your repo name if different
  trailingSlash: true,
}

module.exports = nextConfig
