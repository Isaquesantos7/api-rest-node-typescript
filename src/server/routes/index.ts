import { Router, Response } from "express";

import { CidadesController } from "../controllers/cidades/CidadeController";

const router = Router();

router.get('/', (_, res: Response) => {
  res.status(200).send('Olá, DEV!');
});

router.post("/cidades", CidadesController.create);

export { router };