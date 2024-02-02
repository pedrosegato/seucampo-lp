"use client";

import { useEffect } from "react";
import ResponsiveSection from "../ResponsiveSection";
import Form from "./Form";

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
		<ResponsiveSection className="gap-10">
			<h2 className="text-2xl font-bold text-center text-emerald-700">
				Descubra o poder do SeuCampo para impulsionar o seu negócio!
			</h2>
			<p className="text-center font-bold">
				Entre na lista de espera agora mesmo e seja um dos primeiros a
				testar este sistema transformador.
			</p>
			<Form />
		</ResponsiveSection>
	);
}
