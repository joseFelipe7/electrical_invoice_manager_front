import { InputForm } from "@/components/shared/InputForm/InputForm";
import { useFormContext } from "react-hook-form";

export function InputEnergySCEEEMeasure() {
  const { control } = useFormContext();
  return <InputForm controller={{ name: "text", control }} label="Energia SCEE s/ ICMS unidade" />;
}
