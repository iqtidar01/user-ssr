/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["randomuser.me"], // Allow external images from randomuser.me
  },
};

export default nextConfig;
