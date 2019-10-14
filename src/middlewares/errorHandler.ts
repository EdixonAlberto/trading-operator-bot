import { Request, Response, NextFunction } from 'express';
import interpretError from '../utils/interpretError';

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  // It is checked if the headers were sent
  if (res.headersSent) {
    console.log('HANDLING_EXPRESS');
    // Error handling is delegated to Express
    return next(error);
  }

  // Error handling personalized
  res.status(req.statusCode || 500);
  res.json({
    error: {
      type: error.name,
      message: interpretError(error.message)
    }
  });
};

export default errorHandler;
