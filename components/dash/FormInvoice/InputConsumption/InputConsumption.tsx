import { InputForm } from "@/components/shared/InputForm/InputForm";
import { useFormContext } from "react-hook-form";

export function InputConsumption() {
  const { control } = useFormContext();
  return (
    <InputForm
      controller={{ name: "consumption", control }}
      label="Consumo"
      input={{ type: "number" }}
    />
  );
}
