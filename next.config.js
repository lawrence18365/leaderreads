/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/leaderreads/', // Replace 'leaderreads' with your repo name if different
  basePath: '/leaderreads', // Replace 'leaderreads' with your repo name if different
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
