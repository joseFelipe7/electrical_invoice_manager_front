import { InputForm } from "@/components/shared/InputForm/InputForm";
import { useFormContext } from "react-hook-form";

export function InputElectricalEnergyConsumption() {
  const { control } = useFormContext();
  return <InputForm input={{ type: "number" }} controller={{ name: "electricalEnergyConsumption", control }} label="Energia Elétrica consumo" />;
}
