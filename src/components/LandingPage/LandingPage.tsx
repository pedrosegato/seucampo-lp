"use client";

import CTA from "../CTA/CTA";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Section from "../Responsive/Section";
import Values from "../Values/Values";

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
