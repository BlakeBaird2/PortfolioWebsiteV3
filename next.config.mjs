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
  async redirects() {
    return [
      { source: '/about', destination: '/', permanent: true },
      { source: '/projects', destination: '/', permanent: true },
      { source: '/projects/:slug*', destination: '/', permanent: true },
      { source: '/resume', destination: '/', permanent: true },
      { source: '/contact', destination: '/', permanent: true },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          destination: '/ProfessionalPortfolio.html',
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
