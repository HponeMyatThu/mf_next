import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "guest",
        filename: "static/chunks/guestRemoteEntry.js",
        exposes: {
          "./GuestHomePage": "./src/pages/index"
        },
        shared: {},
        extraOptions: {},
      })
    );
    return config;
  },
};

export default nextConfig;
