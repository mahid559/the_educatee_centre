import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/courses",
        destination: "/programs",
        permanent: true,
      },
      {
        source: "/courses/:slug",
        destination: "/programs/:slug",
        permanent: true,
      },
      {
        source: "/events",
        destination: "/gallery",
        permanent: true,
      },
      {
        source: "/facilities",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/success-stories",
        destination: "/about",
        permanent: true,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
