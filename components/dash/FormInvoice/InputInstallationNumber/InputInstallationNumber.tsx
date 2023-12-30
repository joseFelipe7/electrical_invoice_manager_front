import { InputForm } from "@/components/shared/InputForm/InputForm";
import { useFormContext } from "react-hook-form";

export function InputInstallationNumber() {
  const { control } = useFormContext();
  return <InputForm controller={{ name: "installationNumber", control }} label="N da instalação" />;
}
