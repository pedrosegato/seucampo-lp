"use client";

import ResponsiveDiv from "../../../components/Responsive/ResponsiveDiv";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <header className="flex flex-col bg-green-950 w-full text-center text-white">
      <Navbar />
      <ResponsiveDiv styles="gap-5 items-center px-2 pt-28 pb-20 md:p-20">
        <h1 className="text-white text-2xl break-words md:text-4xl uppercase font-bold">
          Descomplique a reserva do seu campo de futebol! Proporcione a melhor experiência para seus clientes ao reservar sem esforço.
        </h1>
        <a href="#cta" className="bg-green-600 hover:bg-green-700 active:bg-green-800 rounded px-3 py-1 font-bold uppercase text-xl w-fit">
          Quero descomplicar
        </a>
      </ResponsiveDiv>
    </header>
  );
}
