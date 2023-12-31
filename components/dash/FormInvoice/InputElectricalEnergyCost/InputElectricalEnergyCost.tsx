import { InputForm } from "@/components/shared/InputForm/InputForm";
import { useFormContext } from "react-hook-form";

export function InputElectricalEnergyCost() {
  const { control } = useFormContext();
  return <InputForm  input={{ type: "number" }} controller={{ name: "electricalEnergyCost", control }} label="Energia Elétrica valor" />;
}
