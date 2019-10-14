import { Router, Request, Response } from 'express';
import jsonResponse from '../utils/jsonResponse';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const message = 'Operator bot says hello';

  jsonResponse(res, { message });
});

router.get('/time', (req: Request, res: Response) => {
  const time = new Date().toISOString();

  jsonResponse(res, { time });
});

export default router;
