import { Router, Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (_, res: Response) => {
  res.status(200).send('Olá dev!');
});

router.post('/api/teste', (req: Request, res: Response) => {
  res.status(StatusCodes.CREATED).json(req.body);
});

export { router };