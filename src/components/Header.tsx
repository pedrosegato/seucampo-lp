import Image from "next/image";
import ResponsiveSection from "./ResponsiveSection";
import Link from "next/link";

export default function Header() {
	return (
		<header className="flex flex-col text-white bg-gradient-to-r from-green-800 to-green-950">
			<ResponsiveSection className="gap-10">
				<Image
					src="/SeuCampoFull.png"
					alt="Logo SeuCampo"
					width={320}
					height={180}
					className="mx-auto w-fit"
				/>
				<div className="flex flex-col text-center">
					<h1 className="text-2xl md:text-3xl font-bold">
						Otimize a gestão da sua quadra esportiva com SeuCampo
					</h1>
					<p className="text-sm">
						Reservas simplificadas, controle total, página
						personalizada para seu espaço e relatórios detalhados.
						Descomplique, cresça e vença!
					</p>
				</div>
				<Link
					href="#cta"
					className="bg-green-600 hover:bg-green-700 active:bg-green-800 rounded px-4 py-2 font-bold w-fit text-white text-lg text-center mx-auto initial-cta"
				>
					Descomplicar
				</Link>
			</ResponsiveSection>
		</header>
	);
}
