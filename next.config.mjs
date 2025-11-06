/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsHmrCache : false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "usatskcrnobzfcffmqzz.supabase.co",
      },
    ],
  },
  /* config options here */
  async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://gearup.created.app;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
