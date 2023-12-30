"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { invoiceFormSchema } from "./schemas";
import { LoginFormPayload } from "./types";

import * as S from "./styles";
import * as StyleDash from "../styles";
// import { InputPass } from "./InputPass/InputPass";
import { InputMeasure } from "./InputMeasure/InputMeasure";
import { InputConsumption } from "./InputConsumption/InputConsumption";
import { BaseForm } from "@/components/shared/BaseForm/BaseForm";
import api from "@/src/plugins/_core/axiosInstance";
import { InputDateConsumption } from "./InputDateConsumption/InputDateConsumption";

export default function FormInvoice() {
  const router = useRouter();

  async function handleSubmit(payload: LoginFormPayload) {
    try {
      const { data: responseData } = await api.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        payload
      );

      //router.push("/agendamentos");
    } catch (err: any) {
      const { message } = err.response?.data;
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
          resolver: yupResolver(invoiceFormSchema),
        }}
      >
        <S.InputContainer>
          <InputMeasure />
        </S.InputContainer>

        <S.InputContainer>
          <InputConsumption />
        </S.InputContainer>

        <S.InputContainer>
          <InputDateConsumption />
        </S.InputContainer>

        <StyleDash.SubmitButton
          color="primary"
          variant="contained"
          type="submit"
          sx={{ width: "100%" }}
        >
          SALVAR
        </StyleDash.SubmitButton>
      </BaseForm>
    </S.ContentContainer>
  );
}
