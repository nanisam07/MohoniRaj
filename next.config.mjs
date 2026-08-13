/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'go.mohiniraj.in',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
