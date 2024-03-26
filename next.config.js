/** @type {import('next').NextConfig} */

const withLinaria = require("next-with-linaria");

const nextConfig = {
  images: {
    domains: ["images.microcms-assets.io"],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withLinaria(nextConfig);
