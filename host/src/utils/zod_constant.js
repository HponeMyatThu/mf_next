import { z } from "zod";

const nonEmptyString = z
  .string()
  .min(1, { message: "Environment variable cannot be empty" })
  .refine((val) => val.trim() !== "", {
    message: "Environment variable cannot be just whitespace",
  });

const booleanString = z
  .union([
    z.literal("true"),
    z.literal("false"),
    z.literal("1"),
    z.literal("0"),
  ])
  .transform((val) => val === "true" || val === "1");

export { nonEmptyString, booleanString };
