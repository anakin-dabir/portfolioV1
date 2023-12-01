/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: 'en',
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;
