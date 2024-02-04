import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SeuCampo - Solução para agendamento de quadras society online!",
  description:
    "Agendar pelo WhatsApp é do passado! Somos a solução simples e completa para agendamento de quadras online, foque no seu negócio e elimine as dores de cabeça do agendamento manual.",
  creator: "SeuCampo",
  keywords:
    "aluguel de quadra, agendamento de quadra society, agendamento de quadra esportiva, agendar society, seu campo, futebol, futsal, quadra, campo, jogar, alugar, campeonato, brasileiro, agendamento de campos, futebol, reserva de campos, dono de campo",
  openGraph: {
    title: "SeuCampo - Solução para agendamento de quadras society online!",
    description:
      "Agendar pelo WhatsApp é do passado! Somos a solução simples e completa para agendamento de quadras online, foque no seu negócio e elimine as dores de cabeça do agendamento manual.",
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
      <head>
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
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-D0940ZQMKT" />
        <Script
          id="gta"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-D0940ZQMKT');`,
          }}
        />
        <Script
          id="clarity"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
							c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
							t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
							y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
					})(window, document, "clarity", "script", "kwl6rp5ksi");`,
          }}
        />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MJRR7RQL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
      <link rel="icon" type="image/png" href="SeuCampoIconBg.png" />
    </html>
  );
}
