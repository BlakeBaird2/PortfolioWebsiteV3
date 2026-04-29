/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blakebaird.dev',
      },
    ],
  },
};

export default nextConfig;
