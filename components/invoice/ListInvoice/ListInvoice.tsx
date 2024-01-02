"use client";

import { InformationCircleIcon } from "@heroicons/react/solid";

import {
  Card,
  Flex,
  Icon,
  MultiSelect,
  MultiSelectItem,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from "@tremor/react";

import moment from "moment";
moment.locale('pt-br');


import { useEffect, useState } from "react";
import { Invoice } from "./types";


export default function FinalDashboard() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [invoiceDates, setInvoiceDates] = useState<string[]>([]);
  const [selectedStatus, setSelectedDate] = useState("all");
  const [selectedClients, setSelectedClient] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://electrical-invoice.if-developers.com.br/list-invoice',  { 
          method:'GET',
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${userToken.current}`
          }
        })
      .then((res) => res.json())
      .then((data:any) => {
        let datesOptions: string[] = []
        
        setInvoices(data.data.map((item:any)=>{
          let dateFormat = moment(item.date_consumption).format('MMM/YYYY')
          if(!datesOptions.includes(dateFormat)) datesOptions.push(dateFormat)
          return {
            id:item.id,
            clientNumber:item.client_number,
            installationNumber:item.installation_number,
            dateConsumption:dateFormat,
            eletricalEnergy:`${item.electrical_energy_measure} Qtd. ${item.electrical_energy_consumption} ${item.electrical_energy_cost}`,
            energyGdi:`${item.energy_gdi_measure} Qtd. ${item.energy_gdi_consumption} ${item.energy_gdi_cost}`,
            energySceee:`${item.energy_sceee_measure} Qtd. ${item.energy_sceee_consumption} ${item.energy_sceee_cost}`,
            municipalContribution: item.municipal_contribution,
            invoiceAmount: item.invoice_amount,
          }
        }))
        setInvoiceDates(datesOptions)
      })
  }, [])
  useEffect(()=>{
    console.log(invoices)
    console.log(invoiceDates)
    
  },[invoices, invoiceDates])
  const dateSelected = (invoiceItem: any) => {
    return (invoiceItem.dateConsumption === selectedStatus || selectedStatus === "all")
         && (selectedClients.includes(invoiceItem.clientNumber) || selectedClients.length === 0);
  }

  return (
    <main>
      <div className="mt-6">
        <Card>
          <>
            <div>
              <Flex className="space-x-0.5" justifyContent="start" alignItems="center">
                <Title> Faturas </Title>
                <Icon
                  icon={InformationCircleIcon}
                  variant="simple"
                  tooltip="Shows sales performance per employee"
                />
              </Flex>
            </div>
            <div className="flex space-x-2">
              <MultiSelect
                className="max-w-full sm:max-w-xs"
                onValueChange={setSelectedClient}
                placeholder="Selecione o nº do cliente..."
              >
                {invoices.map((item) => (
                  <MultiSelectItem key={item.clientNumber} value={item.clientNumber}>
                    {item.clientNumber}
                  </MultiSelectItem>
                ))}
              </MultiSelect>
              <Select
                className="max-w-full sm:max-w-xs"
                defaultValue="all"
                onValueChange={setSelectedDate}
              >
                <SelectItem key="all" value="all">Todos</SelectItem>
                {invoiceDates.map((item:string) => (
                  <SelectItem key={item} value={item}>{item}</SelectItem>
                ))}
                
              </Select>
            </div>
            <Table className="mt-6">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Nº Cliente</TableHeaderCell>
                  <TableHeaderCell>Nº Instalação</TableHeaderCell>
                  <TableHeaderCell>Mês de referencia</TableHeaderCell>
                  <TableHeaderCell>Energia Elétrica</TableHeaderCell>
                  <TableHeaderCell>Energia SCEEE s/ICMS</TableHeaderCell>
                  <TableHeaderCell>Compensada GD I</TableHeaderCell>
                  <TableHeaderCell>Contrib Ilum Publica Municipal</TableHeaderCell>
                  <TableHeaderCell>Valor</TableHeaderCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {invoices
                  .filter((item:Invoice) => dateSelected(item))
                  .map((item:Invoice) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.clientNumber}</TableCell>
                      <TableCell>{item.installationNumber}</TableCell>
                      <TableCell>{item.dateConsumption}</TableCell>
                      <TableCell>{item.eletricalEnergy}</TableCell>
                      <TableCell>{item.energySceee}</TableCell>
                      <TableCell>{item.energyGdi}</TableCell>
                      <TableCell>{item.energyGdi}</TableCell>
                      <TableCell>{item.invoiceAmount}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </>
        </Card>
      </div>
    </main>
  );
}