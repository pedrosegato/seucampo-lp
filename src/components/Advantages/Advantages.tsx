"use client";

import { Gauge, User, Wrench } from "lucide-react";
import ResponsiveSection from "../ResponsiveSection";
import AdvantagesCard from "./AdvantagesCard";
import { motion, Variants } from "framer-motion";

const parentVariants: Variants = {
	initial: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
		},
	},
};

export default function Advantages() {
	return (
		<ResponsiveSection
			id="values"
			className="gap-10"
		>
			<h2 className="text-2xl font-bold text-center text-emerald-700">
				Quais ferramentas o SeuCampo me proporciona?
			</h2>
			<motion.div
				className="grid grid-cols-1 lg:grid-cols-3 gap-10"
				variants={parentVariants}
				initial="initial"
				whileInView="visible"
				viewport={{ once: true }}
			>
				<AdvantagesCard
					icon={<Wrench />}
					title="Uma página só para seu espaço"
					description="Você pode configurar uma página só sua. Informações como: quantas quadras estão disponíveis, horário de funcionamento, valor do aluguel por hora, endereço, imagens e diversas outras configurações sobre seu negócio."
				/>
				<AdvantagesCard
					icon={<Gauge />}
					title="Dashboard interativo"
					description="Pelo nosso dashboard, você tem acesso a várias informações cruciais sobre o seu negócio, e eles são gerados automaticamente pelo nosso sistema."
				/>
				<AdvantagesCard
					icon={<User />}
					title="Página do cliente"
					description="Com a configuração da sua página, os clientes podem agendar horários online, pelo sistema, eliminando a necessidade de marcar via WhatsApp ou aguardar a resposta do cliente."
				/>
			</motion.div>
		</ResponsiveSection>
	);
}
