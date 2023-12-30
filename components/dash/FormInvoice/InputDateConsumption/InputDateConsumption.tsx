import { useFormContext } from "react-hook-form";
import { DatePickerForm } from "@/components/shared/DatePickerForm/DatePickerForm";

export function InputDateConsumption() {
  const { control } = useFormContext();

  return (
    <DatePickerForm
      controller={{ name: "dateConsumption", control }}
      label="Referente a"
      input={{ views: ["month", "year"], type: "date" }}
    />
  );
}
