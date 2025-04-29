import { Router, Response } from "express";

import { CidadesController } from "../controllers/cidades/CidadeController";
import { Validation } from "../shared/middleware/Validation";
import { cidadeBodyValidation, cidadeGetAllQueryValidation, cidadeGetByIdParamsValidation } from "../shared/validations/CidadeValidation";

const router = Router();

router.get('/', (_, res: Response) => {
  res.status(200).send('Olá, DEV!');
});


router.get("/cidades", Validation.validation(cidadeGetAllQueryValidation, "query"), CidadesController.getAll);
router.get("/cidades/:id", Validation.validation(cidadeGetByIdParamsValidation, "params"), CidadesController.getById);
router.post("/cidades", Validation.validation(cidadeBodyValidation), CidadesController.create);
export { router };