"use client";

import ResponsiveTitle from "@/pages/components/Responsive/ResponsiveTitle";
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
    const handler = (e: Event) => maskPhoneNumber((e?.target as HTMLInputElement)?.value);

    tel.addEventListener("keypress", handler);
    tel.addEventListener("change", handler);

    return () => {
      tel.removeEventListener("keypress", handler);
      tel.removeEventListener("change", handler);
    };
  }, []);

  return (
    <>
      <ResponsiveTitle>Descubra o poder do SeuCampo para impulsionar o seu negócio!</ResponsiveTitle>
      <div className="text-center text-gray-500 flex flex-col gap-10">
        <p>
          SeuCampo não é apenas um sistema de gerenciamento de campos esportivos;{" "}
          <span className="font-bold">é a chave para o crescimento do seu negócio</span>.{" "}
          <span className="font-bold">Aumente sua taxa de clientes</span>, <span className="font-bold">simplifique seu gerenciamento</span>{" "}
          e <span className="font-bold">descomplique a locação para seus clientes</span>.
        </p>
        <p>Quer estar na vanguarda desta revolução no esporte?</p>
        <p>
          <span className="font-bold">
            Entre na lista de espera agora mesmo e seja um dos primeiros a testar este sistema transformador.
          </span>
        </p>
      </div>
      <ContactForm />
    </>
  );
}
