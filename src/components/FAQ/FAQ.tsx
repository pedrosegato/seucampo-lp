import ResponsiveSection from "../ResponsiveSection";
import Accordion from "./Accordion";

export default function FAQ() {
	return (
		<ResponsiveSection
			className="gap-10"
			color="bg-zinc-100"
		>
			<h2 className="text-center text-2xl font-bold text-emerald-700">
				Perguntas frequentes
			</h2>
			<div className="flex flex-col gap-5">
				<Accordion
					question="O SeuCampo oferece algum tipo de treinamento ou tutorial para novos usuários na plataforma?"
					answer="Sim, oferecemos recursos de treinamento e tutoriais para orientar novos usuários. No painel administrativo, você encontrará guias passo a passo, vídeos explicativos e suporte online para garantir que você aproveite ao máximo a plataforma SeuCampo desde o início."
				/>
				<Accordion
					question="O SeuCampo oferece suporte a pagamento online para reservas?"
					answer="Estamos trabalhando ativamente para implementar a funcionalidade de pagamento online em breve. No momento, os agendamentos são confirmados, mas o pagamento é feito no local da quadra. Fique atento para futuras atualizações."
				/>
				<Accordion
					question="É possível personalizar os horários de disponibilidade da minha quadra?"
					answer="Sim, você tem total flexibilidade para personalizar os horários de disponibilidade da sua quadra. Basta acessar as configurações no painel administrativo e ajustar conforme suas necessidades."
				/>
			</div>
		</ResponsiveSection>
	);
}
