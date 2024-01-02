import { InputForm } from "@/components/shared/InputForm/InputForm";
import { useFormContext } from "react-hook-form";

export function InputMunicipalContribution() {
  const { control } = useFormContext();
  return <InputForm input={{ type: "number" }} controller={{ name: "municipalContribution", control }} label="Contrib Ilum Publica Municipal" />;
}
