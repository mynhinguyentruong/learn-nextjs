const { type } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source:'/dashboard',
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
  }
};

module.exports = nextConfig;
