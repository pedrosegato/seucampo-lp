import CTA from './components/CTA/CTA';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ResponsiveDiv from '../components/Responsive/ResponsiveDiv';
import Section from '../components/Responsive/Section';
import Values from './components/Values/Values';

export default function LandingPage() {
	return (
		<div className='flex flex-col h-screen justify-between'>
			<Header />
			<main className='mb-auto'>
				<Section id='values'>
					<ResponsiveDiv styles='gap-12'>
						<Values />
					</ResponsiveDiv>
				</Section>
				<Section id='faq'>
					<ResponsiveDiv styles='gap-20'>
						<FAQ />
					</ResponsiveDiv>
				</Section>
				<Section id='cta'>
					<ResponsiveDiv styles='gap-10'>
						<CTA />
					</ResponsiveDiv>
				</Section>
			</main>
			<Footer />
		</div>
	);
}
