import { InputForm } from "@/components/shared/InputForm/InputForm";
import { useFormContext } from "react-hook-form";

export function InputConsumption() {
  const { control } = useFormContext();
  return <InputForm controller={{ name: "number", control }} label="Consumo" />;
}
