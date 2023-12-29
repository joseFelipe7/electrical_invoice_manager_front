"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { loginFormSchema } from "./schemas";
import { LoginFormPayload } from "./types";

import * as S from "./styles";
import { InputEmail } from "./InputEmail/InputEmail";
import { BaseForm } from "@/components/shared/BaseForm/BaseForm";
import api from "@/src/plugins/_core/axiosInstance";
import { InputPass } from "./InputPass/InputPass";
import { InputFile } from "./InputFile/InputEmail";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function FormLogin() {
  const router = useRouter();
  const { register, getValues, watch } = useForm();
  // console.log('--------------')
  // console.log(getValues('invoice'))

  const watchDoFile = watch('invoice')
  console.log(watchDoFile)
  useEffect(() => { 
    console.log('novo arquivo')
    console.log(watchDoFile)
  }, [watchDoFile ]);
  async function handleSubmit(payload: LoginFormPayload) {
    try {
      const { data: responseData } = await api.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth`,
        payload
      );
      const { token } = responseData;
      const { data: decryptData }: any = jwtDecode(token);

      if (decryptData.id) sessionStorage.setItem("userId", decryptData.id);
      if (decryptData.fullName)
        sessionStorage.setItem("name", decryptData.fullName);

      router.push("/agendamentos");
    } catch (err: any) {
      const { message } = err.response?.data;
    } finally {
    }
  }

  return (
    <S.Container>
      <S.ContentContainer>
        <S.LogoContainer>
          <Image
            src="/assets/nota_fiscal_logo.png"
            width={236}
            height={44}
            alt="logo image"
          />
        </S.LogoContainer>
        <BaseForm
          onSubmit={handleSubmit}
          config={{
            mode: "onBlur",
            reValidateMode: "onBlur",
            resolver: yupResolver(loginFormSchema),
          }}
        >
          <S.InputContainer>
            <InputFile/>
          </S.InputContainer>
          <button type="button" onClick={()=>{console.log('click')}}>Buscar dados</button>
          <S.InputContainer>
            <InputEmail />
          </S.InputContainer>
          <S.InputContainer>
            <InputPass />
          </S.InputContainer>
          <S.Subtitle>
            <Link href="/alterar-senha">
              <S.StyledLink>CLIQUE AQUI</S.StyledLink>
            </Link>
            {""} E REDEFINA SUA SENHAaaaaaaaaaa
          </S.Subtitle>
          <S.SubmitButton color="primary" variant="contained" type="submit">
            Entrar
          </S.SubmitButton>
        </BaseForm>
      </S.ContentContainer>
    </S.Container>
  );
}
