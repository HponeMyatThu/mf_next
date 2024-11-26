import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "authUser",
        filename: "static/chunks/authUserRemoteEntry.js",
        exposes: {
          "./AuthUserHomePage": "./src/pages/index"
        },
        shared: {},
        extraOptions: {},
      })
    );
    return config;
  },
};

export default nextConfig;
