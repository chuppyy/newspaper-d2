/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["apinewspaper.vbonews.com","api.vbonews.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
},
};

export default nextConfig;
