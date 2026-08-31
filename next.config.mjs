/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'media.dev.to' },
      { protocol: 'https', hostname: 'media2.dev.to' },
      { protocol: 'https', hostname: 'dev-to-uploads.s3.amazonaws.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },
};

export default nextConfig;
