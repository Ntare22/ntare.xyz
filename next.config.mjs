/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_CMS_BACKEND: `${process.env.CMS_BACKEND}/graphql`
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

export default nextConfig;
