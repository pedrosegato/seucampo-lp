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
					width={160}
					height={90}
					className="mx-auto w-fit"
				/>
				<h1 className="text-4xl md:text-3xl font-bold w-[300px] md:w-[600px] mx-auto text-center">
					Agendamento online com eficiência para seu negócio de
					quadras
				</h1>
			</ResponsiveSection>
		</header>
	);
}
