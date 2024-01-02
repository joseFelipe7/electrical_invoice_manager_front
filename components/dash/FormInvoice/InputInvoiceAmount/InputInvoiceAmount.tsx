import { InputForm } from "@/components/shared/InputForm/InputForm";
import { useFormContext } from "react-hook-form";

export function InputInvoiceAmount() {
  const { control } = useFormContext();
  return <InputForm input={{ type: "number" }} controller={{ name: "invoiceAmount", control }} label="Valor da fatura" />;
}
