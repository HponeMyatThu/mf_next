import webpackConfig from "./src/config/webpack.config.mjs";
import envConfig from "./src/config/envConfig.js";

const nextConfig = {
  webpack: webpackConfig,
  env: envConfig,
};

export default nextConfig;
