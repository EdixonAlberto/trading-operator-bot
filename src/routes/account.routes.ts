import { Router, Request, Response, NextFunction } from 'express';
import Services from '../services/ExchangeServices';
import jsonResponse from '../utils/jsonResponse';

const router = Router();

router.get('/balance', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const balance = await Services.getBalance();

    jsonResponse(res, { balance });
  } catch (error) {
    next(error);
  }
});

export default router;
