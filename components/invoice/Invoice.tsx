"use client";

import ListInvoice from "./ListInvoice/ListInvoice";

import * as StyleInvoice from "./styles";

export default function Invoice() {
  return (
    <StyleInvoice.Container>
      <ListInvoice></ListInvoice>
    </StyleInvoice.Container>
    
  );
}
