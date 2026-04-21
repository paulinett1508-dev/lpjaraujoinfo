import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { COMPANY_NAME, SITE_URL } from "@/lib/constants";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-ui",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} — Tecnologia para Saúde Pública Municipal`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "Servidor em nuvem, monitoramento APS (Indica eSUS / Saúde Brasil 360) e Painel de Chamadas para Unidades Básicas de Saúde. Soluções desenvolvidas para gestores de saúde municipais.",
  keywords: [
    "Saúde Brasil 360",
    "Indica eSUS",
    "PEC e-SUS",
    "APS",
    "Atenção Primária à Saúde",
    "Secretaria de Saúde",
    "UBS",
    "tecnologia saúde pública",
    "servidor nuvem prefeitura",
    "Piauí",
    "Araújo Informática",
  ],
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} — Tecnologia para Saúde Pública Municipal`,
    description:
      "Servidor em nuvem, monitoramento APS e Painel de Chamadas para UBSs. Solução completa para gestores de saúde municipais.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} — Tecnologia para Saúde Pública`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} — Tecnologia para Saúde Pública`,
    description: "Servidor em nuvem, Indica eSUS e Painel de Chamadas para UBSs.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      id="top"
      className={`${fraunces.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-full antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
