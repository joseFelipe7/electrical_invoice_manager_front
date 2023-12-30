import { InputForm } from "@/components/shared/InputForm/InputForm";
import { useFormContext } from "react-hook-form";

export function InputEnergyGDICost() {
  const { control } = useFormContext();
  return <InputForm controller={{ name: "number", control }} label="Energia compensada GD I Valor" />;
}
