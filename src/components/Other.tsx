import Image from "next/image";
import ResponsiveSection from "./ResponsiveSection";

export default function Other() {
	return (
		<ResponsiveSection className="gap-10">
			<h2 className="text-center text-2xl font-bold text-emerald-700">
				Mais Mídias
			</h2>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 text-justify">
				<div className="flex flex-col gap-5">
					<Image
						src="/Scheduling.webp"
						alt="Agendamento"
						width={1280}
						height={720}
						className="rounded-lg"
					/>
					<p>
						A tabela de agendamentos é gerada automaticamente,
						exibindo os horários disponíveis de forma visível e
						organizada, levando em consideração os agendamentos já
						feitos por outros clientes.
					</p>
				</div>
				<div className="flex flex-col gap-5">
					<Image
						src="/DetailedDash.webp"
						alt="Agendamento"
						width={1280}
						height={720}
						className="rounded-lg"
					/>
					<p>
						O Dashboard SeuCampo é intuitivo e fácil de usar. Com
						esse sistema ver as estatísticas do seu negócio é feito
						com apenas um clique. Você também pode comparar o seu
						desempenho entre meses e configurar os detalhes sobre
						seu espaço.
					</p>
				</div>
			</div>
		</ResponsiveSection>
	);
}
