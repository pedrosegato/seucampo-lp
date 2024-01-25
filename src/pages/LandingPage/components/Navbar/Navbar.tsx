'use client';

import { Link, animateScroll } from 'react-scroll';

export default function Navbar() {
	return (
		<nav className='bg-green-950 w-full h-fit py-2 px-4 flex justify-center md:justify-between items-center text-white fixed t-0 z-10'>
			<img
				className='w-64 cursor-pointer'
				src='SeuCampoFull.png'
				onClick={() =>
					animateScroll.scrollToTop({ duration: 500, smooth: true })
				}
			/>
			<div className='hidden md:block'>
				<ul className='flex flex-row gap-5'>
					<li className='cursor-pointer'>
						<Link
							to='values'
							smooth={true}
							duration={500}
						>
							Informações
						</Link>
					</li>
					<li className='cursor-pointer'>
						<Link
							to='cta'
							smooth={true}
							duration={500}
						>
							Descomplicar
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
