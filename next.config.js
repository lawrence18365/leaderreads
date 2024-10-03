/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
      unoptimized: true,
      domains: ['www.leaderreads.info'],
    },
  }
  
  module.exports = nextConfig