import { Fragment, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { InputFormProps } from "./types";
import * as _ from "lodash";

import MaskedInput from "../MaskedInput/MaskedInput";
import { Box, TextField, Typography } from "@mui/material";

export function InputForm({
  controller,
  input = { error: false },
  label,
  fieldHeader,
  style,
  mask = {
    mask: "",
  },
}: InputFormProps) {
  const { disabled } = input;
  const { setValue } = useFormContext();
  const { state } = input;

  function renderHeader() {
    if (fieldHeader) return fieldHeader;
    if (label) return <Typography>{label}</Typography>;
    return null;
  }

  useEffect(() => {
    if (state && state.content) {
      setValue(controller.name, state.content);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <Box>
      {renderHeader()}
      <Controller
        {...controller}
        render={({ field, formState }) => {
          const { errors } = formState;
          const { name } = controller;
          const fieldError = _.get(errors, name);
          return (
            <Fragment>
              <MaskedInput
                {...mask}
                style={style}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                disabled={disabled}
                data-test={`${name}-testId`}
              >
                {(inputProps: any) => (
                  <TextField
                    color="neutral"
                    {...input}
                    {...field}
                    {...inputProps}
                    value={field.value}
                    error={!!fieldError && !input.disabled}
                    size="small"
                    sx={{ width: "100%" }}
                    data-test={`${name}-testId`}
                  />
                )}
              </MaskedInput>
              {fieldError && !input.disabled && (
                <Typography color="error" variant="body1">
                  {fieldError.message as string}
                </Typography>
                // <S.ErrorMessage color="error" variant="body1">
                //   {fieldError.message as string}
                // </S.ErrorMessage>
              )}
            </Fragment>
          );
        }}
      />
    </Box>
  );
}
