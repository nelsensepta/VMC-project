const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const prod = process.env.NODE_ENV === "production";

module.exports = withPWA({
  reactStrictMode: true,
  // Src Folder
  compilerOptions: {
    baseUrl: "./src",
  },
  pwa: {
    dest: "public",
    register: true,
    // disable: prod ? false : true,
    disable: true,
    runtimeCaching,
  },
  images: {
    formats: ["image/webp"],
    domains: ["res.cloudinary.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  generateBuildId: async () => {
    return "my-build-id";
  },
});
