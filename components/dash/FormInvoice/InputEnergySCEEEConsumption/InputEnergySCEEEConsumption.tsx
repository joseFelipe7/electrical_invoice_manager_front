import { InputForm } from "@/components/shared/InputForm/InputForm";
import { useFormContext } from "react-hook-form";

export function InputEnergySCEEEConsumption() {
  const { control } = useFormContext();
  return <InputForm input={{ type: "number" }} controller={{ name: "energySCEEEConsumption", control }} label="Energia SCEE s/ ICMS consumo" />;
}
