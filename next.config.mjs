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
  async headers() {
    return [
      {
        // Force every visitor/CDN edge to always fetch a fresh copy of the
        // homepage instead of reusing a cached (possibly stale/old-design)
        // HTML response.
        source: '/',
        headers: [
          { key: 'Cache-Control', value: 'no-store, must-revalidate' },
        ],
      },
    ];
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
