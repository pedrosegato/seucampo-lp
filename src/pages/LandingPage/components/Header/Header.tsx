'use client';

import ResponsiveTitle from '@/pages/components/Responsive/ResponsiveTitle';
import ResponsiveDiv from '../../../components/Responsive/ResponsiveDiv';
import Navbar from '../Navbar/Navbar';
import { scroller } from 'react-scroll';

export default function Header() {
	return (
		<header className='bg-green-950 w-full text-center text-white'>
			<Navbar />
			<ResponsiveDiv styles='gap-5 items-center py-20'>
				<ResponsiveTitle styles='uppercase !text-white'>
					Descomplique a reserva do seu campo de futebol! Proporcione
					a melhor experiência para seus clientes ao reservar sem
					esforço.
				</ResponsiveTitle>
				<button
					className='bg-green-600 hover:bg-green-700 active:bg-green-800 rounded px-3 py-1 font-bold uppercase text-xl w-fit'
					onClick={() =>
						scroller.scrollTo('cta', {
							smooth: true,
							duration: 500,
						})
					}
				>
					Quero descomplicar
				</button>
			</ResponsiveDiv>
		</header>
	);
}
