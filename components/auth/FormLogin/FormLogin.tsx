"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { loginFormSchema } from "./schemas";
import { LoginFormPayload } from "./types";

import * as S from "./styles";
// import { InputPass } from "./InputPass/InputPass";
import { InputEmail } from "./InputEmail/InputEmail";
import { BaseForm } from "@/components/shared/BaseForm/BaseForm";
import api from "@/src/plugins/_core/axiosInstance";
import { InputPass } from "./InputPass/InputPass";

export default function FormLogin() {
  const router = useRouter();

  async function handleSubmit(payload: LoginFormPayload) {
    try {
      const { data: responseData } = await api.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth`,
        payload
      );
      const { token } = responseData.authorisation;
  
        sessionStorage.setItem("token", token);

      router.push("/lista");
    } catch (err: any) {
      const { message } = err.response?.data;
    } finally {
    }
  }

  return (
    <S.Container>
      <S.ContentContainer>
        <Image
          src="/assets/nota_fiscal_logo.png"
          width={73}
          height={38}
          alt="logo image"
        />
        <BaseForm
          onSubmit={handleSubmit}
          config={{
            mode: "onBlur",
            reValidateMode: "onBlur",
            resolver: yupResolver(loginFormSchema),
          }}
        >
          <S.InputContainer>
            <InputEmail />
          </S.InputContainer>
          <S.InputContainer>
            <InputPass />
          </S.InputContainer>

          <S.SubmitButton color="primary" variant="contained" type="submit">
            Entrar
          </S.SubmitButton>
        </BaseForm>
      </S.ContentContainer>
    </S.Container>
  );
}
