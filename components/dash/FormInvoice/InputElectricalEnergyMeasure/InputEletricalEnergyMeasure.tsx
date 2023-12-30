import { InputForm } from "@/components/shared/InputForm/InputForm";
import { useFormContext } from "react-hook-form";

export function InputElectricalEnergyMeasure() {
  const { control } = useFormContext();
  return <InputForm controller={{ name: "electricalEnergyMeasure", control }} label="Energia Elétrica Unidade" />;
}
