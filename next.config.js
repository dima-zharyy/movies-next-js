/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["upload.wikimedia.org", "image.tmdb.org"],
    // remotePatterns: [
    //   {
    //     // protocol: "https",
    //     // hostname: "**.tmdb.org",
    //   },
    // ],
  },
};

module.exports = nextConfig;
