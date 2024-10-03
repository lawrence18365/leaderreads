/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/leaderreads', // Removed trailing slash
  basePath: '/leaderreads',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
