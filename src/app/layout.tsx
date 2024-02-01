import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SeuCampo - Reserve seu campo sem dor de cabeça online!",
  description:
    "Transforme a gestão do seu campo de futebol com facilidade e eficiência! Agora, você pode reservar campos instantaneamente e impulsionar seus lucros enquanto elimina as dores de cabeça do agendamento manual. Faça parte dessa revolução através de uma plataforma intuitiva que simplifica a vida tanto dos proprietários quanto dos clientes!",
  creator: "SeuCampo",
  keywords:
    "seu campo, futebol, futsal, quadra, campo, jogar, alugar, campeonato, brasileiro, agendamento de campos, futebol, reserva de campos, dono de campo",
  openGraph: {
    title: "SeuCampo - Reserve seu campo sem dor de cabeça online!",
    description:
      "Transforme a gestão do seu campo de futebol com facilidade e eficiência! Agora, você pode reservar campos instantaneamente e impulsionar seus lucros enquanto elimina as dores de cabeça do agendamento manual. Faça parte dessa revolução através de uma plataforma intuitiva que simplifica a vida tanto dos proprietários quanto dos clientes!",
    url: "https://seucampo.com.br",
    images: [
      {
        url: "https://cdn.discordapp.com/attachments/359821204816658435/1201693719376433233/SeuCampo.png",
        alt: "Logo SeuCampo",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Script
        id="gtm"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-MJRR7RQL');`,
        }}
      />

      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-D0940ZQMKT"></Script>
      <Script
        id="gta"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'G-D0940ZQMKT');`,
        }}
      />
      <body className={inter.className}>{children}</body>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MJRR7RQL"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <link rel="icon" type="image/png" href="SeuCampoIcon.png" />
    </html>
  );
}
