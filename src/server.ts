import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

/* MIDDLEWARES */
import setExchangeMiddleware from './middlewares/setExchange';
import notFoundMiddleware from './middlewares/notFound';
import errorHandlerMiddleware from './middlewares/errorHandler';

/* ROUTES */
// TODO: Import routes dynamically
import indexRoute from './routes/index.routes';
import publicRoutes from './routes/public.routes';
import ordersRoute from './routes/orders.routes';
import accountRoute from './routes/account.routes';

class Server {
  private app: express.Application;
  private static PORT: number;
  private static ENV: string;

  public constructor() {
    this.app = express();
    this.settings();
    this.middlewaresIn();
    this.routes();
    this.middlewaresOut();
  }

  private settings() {
    Server.PORT = Number(process.env.PORT) || 3000;
    Server.ENV = process.env.NODE_ENV as string;
  }

  private middlewaresIn() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    (Server.ENV === 'development') ? this.app.use(morgan('dev')) : null;
    this.app.use(cors());
  }

  private routes() {
    this.app.use('/api', indexRoute);
    this.app.use(setExchangeMiddleware);
    this.app.use('/api/:exchange', publicRoutes);
    this.app.use('/api/:exchange/orders', ordersRoute);
    this.app.use('/api/:exchange/account', accountRoute);
  }

  private middlewaresOut() {
    this.app.use(notFoundMiddleware);
    this.app.use(errorHandlerMiddleware);
  }

  public async start(port: number = Server.PORT): Promise<void> {
    await this.app.listen(port);
    console.log(`>> Server OK - listening at port: ${port}`);
  }
}

export default new Server;
