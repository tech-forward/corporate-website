const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // imagesオブジェクトを追加して、外部ドメインを許可
  images: {
    domains: ['cdn.jsdelivr.net'],
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};
