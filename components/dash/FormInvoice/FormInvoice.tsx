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
import { InputClienteNumber } from "./InputClienteNumber/InputClienteNumber";
import { InputInstallationNumber } from "./InputInstallationNumber/InputInstallationNumber";
import { InputElectricalEnergyConsumption } from "./InputElectricalEnergyConsumption/InputElectricalEnergyConsumption";
import { InputElectricalEnergyCost } from "./InputElectricalEnergyCost/InputElectricalEnergyCost";
import { InputElectricalEnergyMeasure } from "./InputElectricalEnergyMeasure/InputEletricalEnergyMeasure";
import { InputEnergyGDIMeasure } from "./InputEnergyGDIMeasure/InputEnergyGDIMeasure";
import { InputEnergyGDIConsumption } from "./InputEnergyGDIConsumption/InputEnergyGDIConsumption";
import { InputEnergyGDICost } from "./InputEnergyGDICost/InputEnergyGDICost";
import { InputEnergySCEEEMeasure } from "./InputEnergySCEEEMeasure/InputEnergySCEEEMeasure";
import { InputEnergySCEEEConsumption } from "./InputEnergySCEEEConsumption/InputEnergySCEEEConsumption";
import { InputEnergySCEEECost } from "./InputEnergySCEEECost/InputEnergySCEEECost";
import { InputInvoiceAmount } from "./InputInvoiceAmount/InputInvoiceAmount";
import { useForm, useFormContext } from "react-hook-form";

export default function FormInvoice() {
  const router = useRouter();
  const {setValue}= useFormContext();
  async function handleSubmit(payload: LoginFormPayload) {
    try {
      console.log('123')
      setValue("clienteNumber","213")
      // const { data: responseData } = await api.post(
      //   `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      //   payload
      // );

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
          <InputClienteNumber />
        </S.InputContainer>
        <button 
        type="button" 
        onClick={() => { 
          console.log(123)
          setValue("clienteNumber", "123"); 
        }} 
      > 
        TESTES      </button>
        <S.InputContainer>
          <InputInstallationNumber />
        </S.InputContainer>
        <S.InputContainer>
          <InputDateConsumption />
        </S.InputContainer>
        <S.InputContainer>
          <InputInvoiceAmount />
        </S.InputContainer>

        <S.InputContainer>
          <InputElectricalEnergyMeasure/>
        </S.InputContainer>
        <S.InputContainer>
          <InputElectricalEnergyConsumption/>
        </S.InputContainer>
        <S.InputContainer>
          <InputElectricalEnergyCost/>
        </S.InputContainer>

        <S.InputContainer>
          <InputEnergyGDIMeasure/>
        </S.InputContainer>
        <S.InputContainer>
          <InputEnergyGDIConsumption/>
        </S.InputContainer>
        <S.InputContainer>
          <InputEnergyGDICost/>
        </S.InputContainer>

        <S.InputContainer>
          <InputEnergySCEEEMeasure/>
        </S.InputContainer>
        <S.InputContainer>
          <InputEnergySCEEEConsumption/>
        </S.InputContainer>
        <S.InputContainer>
          <InputEnergySCEEECost/>
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
