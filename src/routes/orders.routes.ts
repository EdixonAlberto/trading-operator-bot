import { Router, Request, Response, NextFunction } from 'express';
import { validateOrderParams } from '../utils/validators';
import Services from '../services/ExchangeServices';
import { typeOrder, typeStatus, typeBodyBuySell } from '@types'
import jsonResponse from '../utils/jsonResponse';

const router = Router();
const SYMBOL_DEFAULT = 'BTC/USD';

router.get('/orderBook/limit/:limit', async (req: Request, res: Response, next: NextFunction) => {
  const limit = Number(req.params.limit);
  try {
    const orderBook = await Services.getOrderBook(SYMBOL_DEFAULT, limit);

    jsonResponse(res, { orderBook });
  } catch (error) {
    next(error);
  }
});

router.get('/status/:status', async (req: Request, res: Response, next: NextFunction) => {
  const status = req.params.status as typeStatus;
  try {
    const orders = await Services.getOrdersByStatus(status);

    jsonResponse(res, {
      totalOrders: orders.length,
      orders
    });
  } catch (error) {
    next(error);
  }
});

router.post('/:side', async (req: Request, res: Response, next: NextFunction) => {
  // TODO: const params = validateOrderParams(req.body.params);
  const side = req.params.side as typeOrder['side'];
  const { type, amount, price } = req.body as typeBodyBuySell;

  try {
    const orderCreated = await Services.createOrder({
      symbol: SYMBOL_DEFAULT,
      type: type || 'limit',
      side,
      amount,
      price
    });
    delete orderCreated.info;

    jsonResponse(res, { orderCreated });
  } catch (error) {
    next(error);
  }
});

router.delete('/:orderId', async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.orderId as string;

  try {
    const orderDeleted = await Services.deleteOrder(id);
    delete orderDeleted.info;

    jsonResponse(res, { orderDeleted });
  } catch (error) {
    next(error);
  }
});

export default router;
