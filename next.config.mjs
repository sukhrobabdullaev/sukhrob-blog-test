/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
      },
      {
        protocol: "https",
        hostname:"picsum.photos"
      }
    ],
  },
};

export default nextConfig;
