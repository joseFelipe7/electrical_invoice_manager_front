import * as yup from "yup";

export const loginFormSchema = yup
  .object({
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(3, "Senha não pode ter menos de 3 dígitos"),
  })
  .required();
