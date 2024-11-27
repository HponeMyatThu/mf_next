import { nonEmptyString, booleanString } from "../utils/zod_constant.js";
import { z } from "zod";

const envValidationResult = z
  .object({
    NEXT_PRIVATE_LOCAL_WEBPACK: booleanString,
    BE_URL: nonEmptyString,
  })
  .safeParse({
    NEXT_PRIVATE_LOCAL_WEBPACK: process.env.NEXT_PRIVATE_LOCAL_WEBPACK,
    BE_URL: process.env.BE_URL,
  });

if (!envValidationResult.success) {
  console.error(
    "Invalid or missing environment variables:",
    envValidationResult.error.errors[0]?.path,
    envValidationResult.error.errors[0]?.message
  );
  process.exit(1);
}

const { NEXT_PRIVATE_LOCAL_WEBPACK, BE_URL } = envValidationResult.data;

if (
  Object.values(envValidationResult.data).some((value) => value === undefined)
) {
  console.error("Required environment variables are missing or invalid.");
  process.exit(1);
}

export const env = {
  NEXT_PRIVATE_LOCAL_WEBPACK,
  BE_URL,
};
