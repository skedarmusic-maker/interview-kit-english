import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import JsonLd from "./components/JsonLd";
import Clarity from "./components/Clarity";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://interview.softenglish.com.br"),
  title: "The Ultimate English Interview Kit | Domine sua Entrevista Internacional",
  description: "Prepare-se para entrevistas em inglês em 10 minutos. Sem decoreba, sem travar. O único método com App de Scripts Blindados.",
  verification: {
    google: "cqHXJbW7tHTrUSFgp69J2FJwrV7STU5DXsUF3-JPu3s",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Ultimate English Interview Kit",
    description: "Prepare-se para entrevistas em inglês em 10 minutos. Sem decoreba, sem travar. Acesso imediato.",
    url: "https://interview.softenglish.com.br",
    siteName: "The Ultimate English Interview Kit",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ultimate English Interview Kit",
    description: "Prepare-se para entrevistas em inglês em 10 minutos.",
  },
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
        {/* Google Tags (Ads + Analytics) - Moved to top for better detection */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16883342741"
          strategy="afterInteractive"
        />
        <Script id="google-tags" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16883342741');
            gtag('config', 'G-M9QFZGM6SR');
          `}
        </Script>


        <JsonLd />
        <Clarity />
        {children}
      </body>
    </html>
  );
}
