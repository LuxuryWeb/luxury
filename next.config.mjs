/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns : [
      {
        protocol: 'https',
        hostname: "lh3.googleusercontent.com"
      },
      {
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'upload.luxurygold.click'
      }
    ],
  },
};

export default nextConfig;
