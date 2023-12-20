import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Suspense } from "react";
import Nav from "@/components/shared/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nota Fiscal",
  description: "Gerencie as notas fiscais.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Suspense>
          <Nav />
        </Suspense>

        {children}
      </body>
    </html>
  );
}
