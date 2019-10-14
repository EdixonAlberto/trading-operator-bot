import { Request, NextFunction, Router } from "express";
import Services from "../services/ExchangeServices";
import { typeExchange } from "@types";
const { exchanges } = require('../utils/exchangesDb');

const router = Router();

router.use('/api/:exchange', async (req: Request, res, next: NextFunction) => {
  const exchangeId = req.params.exchange as typeExchange;

  if (exchanges.includes(exchangeId)) {
    const services = await new Services(exchangeId);
    const NODE_ENV = process.env.NODE_ENV;

    (NODE_ENV === 'development') ? services.setUrlTest() : null;

    // Set values personalized for exchange
    switch (exchangeId) {
      case 'bitmex':
        break;

      case 'binance':
        break;

      default:
        break;
    }

    next();
  } else {
    req.statusCode = 400;

    next({
      name: 'ExchangeError',
      message: `Exchange incorrect - could not find '${exchangeId}' in the internal database`
    });
  }
});

export default router;
