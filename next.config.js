/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    apiURL: 'https://pokeapi.co/api/v2/',
  },
};

module.exports = nextConfig;
