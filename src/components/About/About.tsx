import Image from "next/image";
import ResponsiveSection from "../ResponsiveSection";
import Other from "../Preview/Preview";

export default function About() {
	return (
		<ResponsiveSection className="gap-10">
			<h2 className="text-center text-2xl font-bold text-emerald-700">
				O que é o SeuCampo?
			</h2>
			<div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-10 items-center border-b border-gray-300 pb-10">
				<Image
					src="/UserPage.webp"
					width={1280}
					height={720}
					alt="Página do usuário"
					className="rounded-lg"
				/>
				<div className="text-justify flex flex-col gap-5">
					<h3 className="text-lg font-bold">
						Compreendemos o desafio de enviar mensagens diárias aos
						clientes via WhatsApp
					</h3>
					<p>
						Para superar isso, desenvolvemos o SeuCampo,
						automatizando o agendamento de campos, quadras e arenas
						de futebol. Isso simplifica o processo, oferecendo
						facilidade aos clientes ao alugar um espaço. Esta
						praticidade economiza tempo, acelerando o processo de
						agendamento e permitindo mais reservas.
					</p>
				</div>
			</div>
			<Other />
		</ResponsiveSection>
	);
}
