import { InputForm } from "@/components/shared/InputForm/InputForm";
import { useFormContext } from "react-hook-form";

export function InputEnergyGDIConsumption() {
  const { control } = useFormContext();
  return <InputForm input={{ type: "number" }} controller={{ name: "energyGDIConsumption", control }} label="Energia compensada GD I consumo" />;
}
