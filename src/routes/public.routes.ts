import { Router, Request, Response, NextFunction } from 'express';
import Services from '../services/ExchangeServices';
import jsonResponse from '../utils/jsonResponse';

const router = Router();

router.get('/urls', (req: Request, res: Response) => {
  const urls = Services.getUrls();

  jsonResponse(res, { urls });
});

router.get('/markets', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const markets = await Services.getMarkets();

    jsonResponse(res, { markets });
  } catch (error) {
    next(error);
  }
});

router.get('/methods', (req: Request, res: Response) => {
  const methods = Services.getAvailableMethods()

  jsonResponse(res, { methods });
});

export default router;
