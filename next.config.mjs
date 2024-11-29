/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_CMS_BACKEND: 'http://localhost:1337/graphql'
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

export default nextConfig;
