import * as yup from "yup";

export interface ICidade {
  nome: string;
}

export interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

export const cidadeBodyValidation: yup.Schema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
});

export const cidadeGetAllQueryValidation: yup.Schema<IQueryProps> = yup.object().shape({
  page: yup.number().optional().moreThan(0),
  limit: yup.number().optional().moreThan(0),
  filter: yup.string().optional(),
});