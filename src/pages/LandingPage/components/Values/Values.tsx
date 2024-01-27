"use client";

import ValuesCards from "./components/ValuesCards";

export default function Values() {
	return (
		<>
			<ValuesCards
				imgurl="R92002.webp"
				imgalt="Imagem teste"
				title="Página personalizada para seu campo"
				content="Tenha uma página exclusiva com tudo sobre o seu campo. Horários, fotos, informações que seus clientes precisam para marcar aquele jogão!"
			/>

			<ValuesCards
				imgurl="CrisMessi.webp"
				imgalt="Imagem teste"
				title="Agendamento fácil e rápido"
				content="Seu cliente reserva o uso do campo em poucos minutos e você fatura com mais eficiência. Crie experiência marcantes e fidelize clientes."
				left={true}
			/>

			<ValuesCards
				imgurl="Hazard.jpg"
				imgalt="Imagem teste"
				title="Acompanhamento detalhado"
				content="Descubra informações relevantes que podem levar seu negócio ao próximo nível, através de um painel bonito e de fácil uso. "
			/>
		</>
	);
}
