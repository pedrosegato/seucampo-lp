import Link from "next/link";
import ResponsiveSection from "./ResponsiveSection";

export default function Footer() {
	return (
		<footer className="text-white bg-gradient-to-r from-green-800 to-green-950 text-center">
			<ResponsiveSection>
				<p>&copy; SeuCampo, 2024</p>
				<div className="flex flex-row gap-5 justify-center">
					<Link
						href="https://www.instagram.com/seucampo"
						target="_blank"
					>
						Instagram
					</Link>
					<Link
						href="mailto:seucampo@gmail.com"
						target="_blank"
					>
						Email
					</Link>
				</div>
			</ResponsiveSection>
		</footer>
	);
}
