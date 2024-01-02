"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { invoiceFormSchema } from "./schemas";
import { InvoiceFormPayload } from "./types";

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
import { InputMunicipalContribution } from "./InputMunicipalContribution/InputMunicipalContribution";
import moment from "moment";
import dayjs from "dayjs";

export default function FormInvoice() {
  const methods = useFormContext();
// console.log(useFormContext().setValue("clienteNumber", "123"))
  const router = useRouter();
  async function handleSubmit(payload: InvoiceFormPayload) {
    try {
      console.log(payload)
      const payloadFormat = {
        client_number: payload.clientNumber,
        installation_number: payload.installationNumber,
        date_consumption: dayjs(payload.dateConsumption).format('YYYY-MM'),
        electrical_energy_measure: payload.electricalEnergyMeasure,
        electrical_energy_consumption: payload.electricalEnergyConsumption,
        electrical_energy_cost: payload.electricalEnergyCost,
        energy_sceee_measure: payload.energySCEEEMeasure,
        energy_sceee_consumption: payload.energySCEEEConsumption,
        energy_sceee_cost: payload.energySCEEECost,
        energy_gdi_measure: payload.energyGDIMeasure,
        energy_gdi_consumption: payload.energyGDIConsumption,
        energy_gdi_cost: payload.energyGDICost,
        municipal_contribution: payload.municipalContribution,
        invoice_amount: payload.invoiceAmount
      }
      const { data: responseData } = await api.post(
        `${process.env.NEXT_PUBLIC_API_URL}/create-invoice`,
        payloadFormat
      );

      router.push("/lista");
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
          if (methods.setValue) {
            methods.setValue("clienteNumber","213")
          }
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
        <S.InputContainer>
          <InputMunicipalContribution/>
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
