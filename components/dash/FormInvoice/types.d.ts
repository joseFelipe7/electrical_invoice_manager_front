export type InvoiceFormPayload = {
  clientNumber: string,
  installationNumber: string,
  dateConsumption: date,
  electricalEnergyMeasure: string,
  electricalEnergyConsumption: number,
  electricalEnergyCost:number,
  energySCEEEMeasure: string,
  energySCEEEConsumption: number,
  energySCEEECost: number,
  energyGDIMeasure: string,
  energyGDIConsumption: number,
  energyGDICost: number,
  municipalContribution: number,
  invoiceAmount: number
};
