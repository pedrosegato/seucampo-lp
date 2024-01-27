"use client";

import { useEffect } from "react";
import { ContactForm } from "./Form";

export default function CTA() {
	useEffect(() => {
		const tel = document.getElementById("phone") as HTMLInputElement;
		if (!tel) return;

		const maskPhoneNumber = (valor: string) => {
			valor = valor.replace(/\D/g, "");
			valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
			valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
			tel.value = valor;
		};
		const handler = (e: Event) =>
			maskPhoneNumber((e?.target as HTMLInputElement)?.value);

		tel.addEventListener("keypress", handler);
		tel.addEventListener("change", handler);

		return () => {
			tel.removeEventListener("keypress", handler);
			tel.removeEventListener("change", handler);
		};
	}, []);

	return (
		<>
			<h2 className="text-3xl text-emerald-700 font-bold text-center">
				Descubra o poder do SeuCampo para impulsionar o seu negócio!
			</h2>
			<div className="text-center text-gray-500 flex flex-col gap-10">
				<p>
					SeuCampo não é apenas um sistema de gerenciamento de campos
					esportivos;{" "}
					<b>é a chave para o crescimento do seu negócio</b>.{" "}
					<b>Aumente sua taxa de clientes</b>,{" "}
					<b>simplifique seu gerenciamento</b> e{" "}
					<b>descomplique a locação para seus clientes</b>.
				</p>
				<p>Quer estar na vanguarda desta revolução no esporte?</p>
				<p>
					<b>
						Entre na lista de espera agora mesmo e seja um dos
						primeiros a testar este sistema transformador.
					</b>
				</p>
			</div>
			<ContactForm />
		</>
	);
}
