import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import router from './app/routers/router';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
 import cookieParser from 'cookie-parser';
const app: Application = express();

// parsers
app.use(express.json());
 app.use(cookieParser());
app.use(cors({ origin: 'https://bike-shop-client-lime.vercel.app',
   credentials:true }));

//application routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrorHandler);

export default app;
