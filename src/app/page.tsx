import About from "@/components/About/About";
import Advantages from "@/components/Advantages/Advantages";
import CTA from "@/components/CTA/CTA";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
	return (
		<div className="flex flex-col gap-10 min-h-screen justify-between text-gray-700">
			<Header />
			<main className="flex flex-col gap-10 mb-auto">
				<About />
				<Advantages />
				<FAQ />
				<CTA />
			</main>
			<Footer />
		</div>
	);
}
