/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_BASE_URL: "http://localhost:4200",
  },

  images: {
    domains: ["localhost", "static.thairath.co.th"],
  },
};

module.exports = nextConfig;
