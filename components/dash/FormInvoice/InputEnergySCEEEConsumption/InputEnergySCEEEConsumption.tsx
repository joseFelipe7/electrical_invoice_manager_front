import { InputForm } from "@/components/shared/InputForm/InputForm";
import { useFormContext } from "react-hook-form";

export function InputEnergySCEEEConsumption() {
  const { control } = useFormContext();
  return <InputForm controller={{ name: "number", control }} label="Energia SCEE s/ ICMS consumo" />;
}
