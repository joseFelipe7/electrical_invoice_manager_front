import { DetailedHTMLProps, FormHTMLAttributes, ReactNode } from "react";
import { UseFormProps } from "react-hook-form";

export type AppBarProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement, HTMLFormElement>
> & {
  children: ReactNode;
};
