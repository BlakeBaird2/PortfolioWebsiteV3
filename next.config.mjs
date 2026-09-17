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
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/ProfessionalPortfolio.html',
      },
    ];
  },
};

export default nextConfig;
