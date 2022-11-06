/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: "4f7db32deafa46415b96d8eae8667c0e",
  },
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
