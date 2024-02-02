import { Gauge, MessageCircle, User, Wrench } from "lucide-react";
import ResponsiveSection from "../ResponsiveSection";
import AdvantagesCard from "./AdvantagesCard";

export default function Advantages() {
	return (
		<ResponsiveSection className="gap-10">
			<h2 className="text-2xl font-bold text-center text-emerald-700">
				Quais ferramentas o SeuCampo me proporciona?
			</h2>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
				<AdvantagesCard
					icon={<Wrench />}
					title="Uma página só para seu espaço"
					description="Você pode configurar uma página só para você. Informações como: quantas quadras estão disponíveis, horário de funcionamento, valor do aluguel, endereço, e diversas outras configurações sobre seu negócio."
				/>
				<AdvantagesCard
					icon={<Gauge />}
					title="Dashboard interativo"
					description="Pelo nosso dashboard, você tem acesso a diversas informações cruciais sobre o seu negócio, e eles são gerados automaticamente pelo nosso sistema."
				/>
				<AdvantagesCard
					icon={<User />}
					title="Página do cliente"
					description="Com a configuração da sua página, os clientes podem agendar horários diretamente pelo sistema, eliminando a necessidade de marcar via WhatsApp ou aguardar a resposta do cliente."
				/>
			</div>
		</ResponsiveSection>
	);
}
