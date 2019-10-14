import ccxt, { Exchange } from 'ccxt';
import { getApiKey } from '../utils/apiKeyManager';
import { typeExchange } from '@types';

let exchanges: Exchange[typeExchange] = [];

const exchangeInstanceExists = (exchangeId: typeExchange): boolean => {
  return exchanges.includes(exchangeId);
};

const getExchangeInstance = (exchangeId: typeExchange): Exchange => {
  if (exchangeInstanceExists(exchangeId)) {
    return exchanges[exchangeId];
  }

  const { apiKey, secret } = getApiKey(exchangeId);
  const Exchange = ccxt[exchangeId];

  const exchangeInstance = new Exchange({
    apiKey,
    secret,
    timeout: 30000,
    enableRateLimit: true
  });

  exchanges[exchangeId] = exchangeInstance;

  return exchangeInstance;
};

export { getExchangeInstance, exchangeInstanceExists };
