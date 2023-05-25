/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compilerOptions: {
    baseUrl: '.',
    paths: {
      '@/components/*': ['components/*'],
      '@/utility/*': ['utility/*'],
    },
  },
};

module.exports = nextConfig;
