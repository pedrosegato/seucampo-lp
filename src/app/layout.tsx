import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SeuCampo",
  description: "Reserve seu campo sem dor de cabeça com a melhor experiência para seus clientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
      <link rel="icon" type="image/png" href="SeuCampoIcon.png" />
    </html>
  );
}
