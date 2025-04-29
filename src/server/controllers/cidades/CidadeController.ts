import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { ICidade, IParamsProps, IQueryProps } from "../../shared/validations/CidadeValidation";


export class CidadesController {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  static async getAll(req: Request<{}, {}, {}, IQueryProps>, res: Response): Promise<void> {
    console.log(req.query);
    
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado!");
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  static async getById(req: Request<{}, {}, IParamsProps>, res: Response): Promise<void> {
    console.log(req.params);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!');
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  static async create(req: Request<{}, {}, ICidade>, res: Response): Promise<void> {
    console.log(req.body);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Não implementado!");
  }
}