import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { ICidade, IQuery } from "../../shared/validations/CidadeValidation";


export class CidadesController {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  static async create(req: Request<{}, {}, ICidade>, res: Response): Promise<void> {

    res.status(StatusCodes.OK).json(req.body);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  static async searchToQuery(req: Request<{}, {}, IQuery>, res: Response): Promise<void> {

    res.status(StatusCodes.OK).json(req.query);
  }
}