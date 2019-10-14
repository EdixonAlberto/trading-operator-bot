import { Request, Response, NextFunction } from 'express';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  req.statusCode = 404;

  next({
    name: 'RouteError',
    message: `Route not found - route '${req.originalUrl}' is not among the available routes`
  });
};

export default notFound;
