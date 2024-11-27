import NextFederationPlugin from "@module-federation/nextjs-mf";

const webpackConfig = (config) => {
  if (!config.plugins) {
    config.plugins = [];
  }

  config.plugins.push(
    new NextFederationPlugin({
      name: "host",
      filename: "static/chunks/mainRemoteEntry.js",
      remotes: {
        guest:
          "guest@http://localhost:8001/_next/static/chunks/guestRemoteEntry.js",
        authUser:
          "authUser@http://localhost:8002/_next/static/chunks/authUserRemoteEntry.js",
      },
      shared: {},
      extraOptions: {},
    })
  );

  return config;
};

export default webpackConfig;
