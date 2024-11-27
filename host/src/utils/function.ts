import { RAW_CHARSET } from "./constant";

function generateNonce(length = 16) {
  const charset = RAW_CHARSET;
  let nonce = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    nonce += charset[randomIndex];
  }
  return nonce;
}

export { generateNonce };
