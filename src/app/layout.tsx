import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "@/components/Header";
import { CartContextProvider } from "@/hooks/useCart";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loja",
  description: "Os melhores produtos da região",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Header />
        <CartContextProvider>{children}</CartContextProvider>
      </body>
    </html>
  );
}
