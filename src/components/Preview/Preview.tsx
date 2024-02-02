import PreviewCard from "./PreviewCard";

export default function Other() {
	return (
		<>
			<h3 className="text-lg font-bold text-center">
				Para isso oferecemos...
			</h3>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-justify">
				<PreviewCard
					imgsrc="/Scheduling.webp"
					imgalt="Agendamento"
					description="Uma tabela de agendamento que é gerada automaticamente,
					exibe os horários disponíveis de forma visível e
					organizada, levando em consideração os agendamentos já
					feitos por outros clientes."
				/>
				<PreviewCard
					imgsrc="/DetailedDash.webp"
					imgalt="Dashboard interativo"
					description="Um dashboard intuitivo e simples de usar. Visualize as
					estatísticas do seu negócio com apenas um clique. Ajuste
					detalhes sobre seu espaço facilmente."
				/>
			</div>
		</>
	);
}
