import { Router, Response } from "express";

import { CidadesController } from "../controllers/cidades/CidadeController";
import { Validation } from "../shared/middleware/Validation";
import { cidadeBodyValidation, cidadeQueryValidation } from "../shared/validations/CidadeValidation";

const router = Router();

router.get('/', (_, res: Response) => {
  res.status(200).send('Olá, DEV!');
});

router.post("/cidades", Validation.validation(cidadeBodyValidation), CidadesController.create);
router.get("/cidades", Validation.validation(cidadeQueryValidation, "query"), CidadesController.searchToQuery);
export { router };