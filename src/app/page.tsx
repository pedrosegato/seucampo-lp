import About from "@/components/About/About";
import Advantages from "@/components/Advantages/Advantages";
import CTA from "@/components/CTA/CTA";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Other from "@/components/Other";

export default function Home() {
	return (
		<div className="flex flex-col gap-10 min-h-screen justify-between">
			<Header />
			<main className="flex flex-col gap-20 mb-auto">
				<About />
				<Advantages />
				<FAQ />
				<CTA />
				<Other />
			</main>
			<Footer />
		</div>
	);
}
