import * as yup from "yup";

export const invoiceFormSchema = yup
  .object({
    // consumption: yup.number().required("Campo obrigatório"),
    // measure: yup.string().required("Campo obrigatório"),
    // dateConsumption: yup.date().required("Campo obrigatório"),
  })
  .required();
