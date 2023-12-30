import { InputForm } from "@/components/shared/InputForm/InputForm";
import { useFormContext } from "react-hook-form";

export function InputFile() {
  const { control } = useFormContext();
  return <InputForm controller={{ name: "invoice", control }}  input={{type:'file', onChange:()=>{console.log('change')}}} label="Fatura" />;
}
