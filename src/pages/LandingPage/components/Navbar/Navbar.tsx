"use client";

export default function Navbar() {
	return (
		<nav className="bg-green-950 w-full h-fit py-2 px-4 flex justify-center md:justify-between items-center text-white fixed t-0 z-10">
			<a href="#">
				<img
					className="w-64 cursor-pointer"
					src="SeuCampoFull.png"
				/>
			</a>
			<div className="hidden md:block">
				<ul className="flex flex-row gap-5">
					<li className="cursor-pointer">
						<a href="#values">Informações</a>
					</li>
					<li className="cursor-pointer">
						<a href="#cta">Descomplicar</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
