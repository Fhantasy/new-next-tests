/** @type {import('next').NextConfig} */

const nextConfig = {
  images: { domains: ["store.storeimages.cdn-apple.com"] },
  experimental: {
    serverComponentsExternalPackages: ["reactstrap"],
  },
};

module.exports = nextConfig;
