import * as yup from "yup";

export interface ICidade {
  nome: string;
}

export interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

export interface IParamsProps {
  id?: number;
}

export interface IBodyProps {
  nome: string;
}

export const cidadeBodyValidation: yup.Schema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
});

export const cidadeGetAllQueryValidation: yup.Schema<IQueryProps> = yup.object().shape({
  page: yup.number().optional().moreThan(0),
  limit: yup.number().optional().moreThan(0),
  filter: yup.string().optional(),
});

export const cidadeGetByIdParamsValidation: yup.Schema<IParamsProps> = yup.object().shape({
  id: yup.number().integer().required().moreThan(0),
});

export const cidadeUpdateByIdValidations: yup.Schema<IBodyProps> = yup.object().shape({
  nome: yup.string().required().min(3),
});