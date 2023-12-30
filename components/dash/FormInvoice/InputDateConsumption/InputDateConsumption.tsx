import { useFormContext } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DatePickerForm } from "@/components/shared/DatePickerForm/DatePickerForm";

export function InputDateConsumption() {
  const { control } = useFormContext();

  return (
    <DatePickerForm
      controller={{ name: "", control }}
      label="Consumo"
      input={{ views: ["month", "year"] }}
    />
  );
}
