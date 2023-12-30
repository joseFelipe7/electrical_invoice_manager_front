import { TextFieldProps } from "@mui/material";
import { CSSProperties, ReactNode } from "react";
import { ControllerProps } from "react-hook-form";
import { Props as MaskedInputProps } from "react-input-mask";

export type InputStateType = "success" | "error";

export type InputAsyncValidationResponse = {
  type: InputStateType;
  content?: string;
};

export type CustomInputProps = TextFieldProps & {
  state?: InputAsyncValidationResponse;
  error?: boolean;
  views?: string[];
};

export type DatePickerFormProps = {
  controller: Omit<ControllerProps, "render">;
  input?: CustomInputProps;
  mask?: MaskedInputProps;
  label?: string;
  fieldHeader?: ReactNode;
  style?: CSSProperties;
};
