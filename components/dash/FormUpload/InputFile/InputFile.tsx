import { Button } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import * as S from "./styles";
import _ from "lodash";

export function InputFile({
  onChange,
  input = { error: false },
  ...props
}: {
  onChange?: Function;
  input?: any;
}) {
  const { control } = useFormContext();
  const controller = { name: "invoice", control };

  const getFileData = (event: any) => {
    if (onChange) onChange(event);
  };

  return (
    <Button
      component="label"
      variant="contained"
      startIcon={<CloudUploadIcon />}
    >
      Enviar Fatura
      <Controller
        {...controller}
        render={({ field, formState }) => {
          const { errors } = formState;
          const { name } = controller;

          const fieldError = _.get(errors, name);
          return (
            <>
              <S.VisuallyHiddenInput
                {...input}
                {...field}
                value={field.value}
                data-test={`${name}-testId`}
                type="file"
                onBlur={field.onBlur}
                onChange={(e) => {
                  field.onChange;
                  field.onBlur;

                  getFileData(e);
                }}
              />

              {fieldError && !input.disabled && (
                <S.ErrorMessage color="error" variant="body1">
                  {fieldError.message as string}
                </S.ErrorMessage>
              )}
            </>
          );
        }}
      />
    </Button>
  );
}
