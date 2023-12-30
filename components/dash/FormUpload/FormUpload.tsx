"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { LoginFormPayload } from "./types";

import * as S from "./styles";
import * as StyleDash from "../styles";
import { BaseForm } from "@/components/shared/BaseForm/BaseForm";
import api from "@/src/plugins/_core/axiosInstance";
import { InputFile } from "./InputFile/InputFile";
import { useForm, useFormContext } from "react-hook-form";
import { useEffect, useRef, useState } from "react";

export default function FormUpload() {
  const router = useRouter();

  const { getValues, setValue } = useForm();

  const fileData = useRef<File>();
  const [errorFile, setErrorFile] = useState<{ message: string }>({
    message: "",
  });

  function handleFile(event: any) {
    fileData.current = event?.target?.files[0];

    if (fileData.current) setErrorFile({ message: "" });

    console.log(fileData.current);
  }

  async function handleSubmit(payload: any) {
    console.log("fatura", getValues("fatura"));

    console.log(payload);

    console.log("fileData", fileData.current);
    if (!fileData.current)
      setErrorFile({ message: "Selecione um arquivo no formato pdf" });

    // ! VALIDAÇÃO DE TAMANHO DO ARQUIVO

    try {
      if (!fileData.current) return;

      const form = new FormData();
      form.append("invoice", fileData.current, fileData.current?.name);

      const { data: responseData } = await api.post(
        `${process.env.NEXT_PUBLIC_API_URL}/read-invoice`,
        { invoice: fileData.current },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setValue("clienteNumber","213")
      console.log(responseData);
      //router.push("/notas");
    } catch (err: any) {
      const { message } = err.response?.data;
      console.log(message);
    } finally {
    }
  }

  return (
    <S.ContentContainer>
      <BaseForm
        onSubmit={handleSubmit}
        config={{
          mode: "onBlur",
          reValidateMode: "onBlur",
        }}
      >
        <S.InputContainer>
          <InputFile onChange={handleFile} />
        </S.InputContainer>

        {errorFile?.message && (
          <S.ErrorMessage color="error" variant="body1">
            {errorFile?.message as string}
          </S.ErrorMessage>
        )}

        <StyleDash.SubmitButton
          color="primary"
          variant="contained"
          type="submit"
        >
          Entrar
        </StyleDash.SubmitButton>
      </BaseForm>
    </S.ContentContainer>
  );
}
