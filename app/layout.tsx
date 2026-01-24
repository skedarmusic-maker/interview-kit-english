import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-geist-sans", // Keeping the variable name used in globals.css or updating it. I'll stick to 'font-sans' logic.
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Ultimate English Interview Kit | Domine sua Entrevista Internacional",
  description: "Prepare-se para entrevistas em inglês em 10 minutos. Sem decoreba, sem travar. O único método com App de Scripts Blindados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
