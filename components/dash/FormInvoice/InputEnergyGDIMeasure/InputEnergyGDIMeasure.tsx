import { InputForm } from "@/components/shared/InputForm/InputForm";
import { useFormContext } from "react-hook-form";

export function InputEnergyGDIMeasure() {
  const { control } = useFormContext();
  return <InputForm controller={{ name: "energyGDIMeasure", control }} label="Energia compensada GD I unidade" />;
}
