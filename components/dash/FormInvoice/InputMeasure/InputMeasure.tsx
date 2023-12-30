import { InputForm } from "@/components/shared/InputForm/InputForm";
import { useFormContext } from "react-hook-form";

export function InputMeasure() {
  const { control } = useFormContext();
  return (
    <InputForm
      controller={{ name: "measure", control }}
      label="Unidade"
      input={{ type: "text" }}
    />
  );
}
