"use client";

import CTA from "./components/CTA/CTA";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section from "../components/Responsive/Section";
import Values from "./components/Values/Values";

export default function LandingPage() {
	return (
		<div className="flex flex-col h-screen justify-between">
			<Header />
			<main className="mb-auto">
				<Section id="values">
					<Values />
				</Section>
				<Section id="faq">
					<FAQ />
				</Section>
				<Section id="cta">
					<CTA />
				</Section>
			</main>
			<Footer />
		</div>
	);
}
