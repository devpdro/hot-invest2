import type { Metadata } from "next";
import "src/presentation/styles/global.scss";

export const metadata: Metadata = {
  title: "HotInvest: Nenhuma taxa, todos os motivos pra escolher",
  description: "A HotInvest é a conta digital feita para você ter mais controle, rendimento superior à poupança e zero tarifas escondidas. Abra a sua e simplifique sua vida financeira.",
  keywords: ["HotInvest", "conta digital", "sem tarifas", "rendimento CDI", "cartão pré-pago", "fintech", "abrir conta digital"],
  metadataBase: new URL("https://www.hotinvest.com.br"),
  openGraph: {
    title: "HotInvest | Sua conta digital sem tarifas e com rendimento real",
    description: "A conta digital que cabe no seu bolso e no seu estilo de vida. 100% gratuita, segura e controlada pelo app.",
    url: "https://www.hotinvest.com.br",
    siteName: "HotInvest",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HotInvest - Conta digital com rendimento e sem tarifas",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
