import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
				url: "/public/SeuCampoFull.png",
				alt: "Logo SeuCampo",
				width: 800,
				height: 600,
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
			<body className={inter.className}>{children}</body>
			<link
				rel="icon"
				type="image/png"
				href="SeuCampoIcon.png"
			/>
		</html>
	);
}
