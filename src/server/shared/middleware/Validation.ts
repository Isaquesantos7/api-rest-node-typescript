import { Request, NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

type TProperty = "body" | "query" | "params";

export class Validation {
  static validation(schema: yup.AnySchema, source: TProperty = 'body') {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const dataToValidate = req[source];
        await schema.validate(dataToValidate, { abortEarly: false });
        return next();
      } catch (err) {
        const yupError = err as yup.ValidationError;
        const errors: Record<string, string> = {};
  
        yupError.inner.forEach(error => {
          if (error.path === undefined) return;
          errors[error.path] = error.message;
        });
  
        res.status(StatusCodes.BAD_REQUEST).json({ errors });
        return;
      }
    };
  }

  static validateMultiple(schemas: Partial<Record<TProperty, yup.AnySchema>>) {
    return async (req: Request, res: Response, next: NextFunction) => {
      const validationErrors: Record<string, string> = {};
  
      for (const key of Object.keys(schemas) as TProperty[]) {
        const schema = schemas[key];
        if (!schema) continue;
  
        try {
          await schema.validate(req[key], { abortEarly: false });
        } catch (err) {
          const yupError = err as yup.ValidationError;
          yupError.inner.forEach((error) => {
            if (error.path === undefined) return;
            validationErrors[`${key}.${error.path}`] = error.message;
          });
        }
      }
  
      if (Object.keys(validationErrors).length > 0) {
        res.status(StatusCodes.BAD_REQUEST).json({ errors: validationErrors });
        return;
      }
  
      return next();
    };
  }
}