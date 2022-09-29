const { type } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source:'/dashboard', // not working correctly
        has: [
          {
            type: 'cookie',
            key: 'undefined',
            value: 'undefined'
          }
        ],
        destination: '/login',
        permanent: true
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/dashboard',
        headers: [
        
          {
            key: 'authorization',
            value: 'true'
          }
        ]
      }
    ]
  }
};

module.exports = nextConfig;
