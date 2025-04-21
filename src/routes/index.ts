import { Router } from "express";
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (_, res) => {
  res.status(200).send('Olá dev!');
});

router.post('/api/teste', (req, res) => {
  res.status(StatusCodes.CREATED).json(req.body);
});

export { router };