/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'alwaqaspaint.com' }],
        destination: 'https://www.alwaqaspaint.com/:path*',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['www.alwaqaspaint.com'],
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
        ],
      },
    ];
  },
  trailingSlash: true,
};

export default nextConfig;