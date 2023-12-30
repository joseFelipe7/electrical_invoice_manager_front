"use client";

import { AppBar } from "../shared/AppBar/AppBar";
import FormInvoice from "./FormInvoice/FormInvoice";
import FormUpload from "./FormUpload/FormUpload";

import * as StyleDash from "./styles";

export default function NewInvoice() {
  return (
    // <AppBar />
    <StyleDash.Container>
      <FormUpload />
      <FormInvoice />
    </StyleDash.Container>
  );
}
