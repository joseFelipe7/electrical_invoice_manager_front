import { InputForm } from "@/components/shared/InputForm/InputForm";
import { useFormContext } from "react-hook-form";

export function InputPass() {
  const { control } = useFormContext();
  return <InputForm controller={{ name: "password", control }} label="Senha" />;
}
