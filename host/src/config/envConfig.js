import { env } from "./validateEnv.js";

const envConfig = {
  NEXT_PRIVATE_LOCAL_WEBPACK: env.NEXT_PRIVATE_LOCAL_WEBPACK,
  BE_URL: env.BE_URL,
};

export default envConfig;
