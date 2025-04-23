import * as yup from "yup";

export interface ICidade {
  nome: string;
  estado: string;
}

export interface IQuery {
  nome?: string;
}

export const cidadeBodyValidation: yup.Schema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
  estado: yup.string().required().min(2).max(2),
});

export const cidadeQueryValidation: yup.Schema<IQuery> = yup.object().shape({
  nome: yup.string().min(2).optional()
});