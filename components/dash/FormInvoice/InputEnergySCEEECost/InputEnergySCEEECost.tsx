import { InputForm } from "@/components/shared/InputForm/InputForm";
import { useFormContext } from "react-hook-form";

export function InputEnergySCEEECost() {
  const { control } = useFormContext();
  return <InputForm input={{ type: "number" }} controller={{ name: "energySCEEECost", control }} label="Energia SCEE s/ ICMS valor" />;
}
