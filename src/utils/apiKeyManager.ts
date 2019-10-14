import { typeCredential, typeExchange } from "@types";

const env: NodeJS.ProcessEnv = process.env;
// TODO: Search a data type for: API_KEYS
const API_KEYS: any = {
  binance: {
    apiKey: env.BINANCE_KEY,
    secret: env.BINANCE_SECRET
  },
  bitmex: {
    apiKey: env.BITMEX_KEY,
    secret: env.BITMEX_SECRET
  }
};

const getApiKey = (exchangeId: typeExchange): typeCredential => {
  return API_KEYS[exchangeId];
};

export { getApiKey };
