import { InputForm } from "@/components/shared/InputForm/InputForm";
import { useFormContext } from "react-hook-form";

export function InputClienteNumber() {
  const { control } = useFormContext();
  return <InputForm controller={{ name: "clienteNumber", control }} label="N do cliente" />;
}
