"use client";

import Accordion from "./components/Accordion";

export default function FAQ() {
	return (
		<>
			<h2 className="text-3xl text-emerald-700 font-bold text-center">
				Perguntas frequentes
			</h2>
			<div>
				<Accordion
					question="Como funciona o SeuCampo para donos de campos?"
					answer="Com o SeuCampo, você recebe uma página personalizada para o seu campo, onde pode exibir informações cruciais como horários, fotos e até promover eventos. Além disso, nosso dashboard fácil de usar permite que você gerencie suas reservas, veja o faturamento em tempo real e faça ajustes nos horários com facilidade."
				/>
				<Accordion
					question="Posso personalizar a minha página para o campo de acordo com as minhas preferências?"
					answer="Com certeza! A página do seu campo no SeuCampo é totalmente personalizável. Você pode adicionar imagens atraentes, definir os horários de funcionamento, e destacar os aspectos únicos do seu espaço esportivo. Queremos que a sua página seja uma verdadeira representação do seu negócio!"
				/>
				<Accordion
					question="Como posso começar a utilizar o SeuCampo para o meu campo?"
					answer="É simples! Basta se registrar no SeuCampo, seguir as instruções para configurar o seu campo e começar a desfrutar das vantagens imediatas. Se precisar de ajuda durante o processo, nossa equipe de suporte está pronta para te auxiliar. Transforme seu campo agora - o sucesso está a um clique de distância!"
				/>
			</div>
		</>
	);
}
