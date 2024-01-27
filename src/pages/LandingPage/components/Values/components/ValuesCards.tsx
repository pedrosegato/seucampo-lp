'use client';

import ResponsiveTitle from '@/pages/components/Responsive/ResponsiveTitle';
import { scroller } from 'react-scroll';
import { motion } from 'framer-motion';

type Props = {
	left?: boolean;
	img: string;
	imgalt: string;
	title: string;
	content: string;
};

export default function ValuesCards({
	left,
	img,
	imgalt,
	title,
	content,
}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className={`flex gap-10 flex-col md:flex-row ${
				left && 'md:flex-row-reverse'
			}`}
		>
			<div className='md:w-[50%]'>
				<img
					className='h-[100%] rounded-[1em] mx-auto object-cover object-center resize'
					src={img}
					alt={imgalt}
				/>
			</div>
			<div className='flex flex-col justify-between md:w-[50%] gap-5'>
				<div className='flex flex-col gap-5'>
					<ResponsiveTitle styles='break-words !text-left'>
						{title}
					</ResponsiveTitle>
					<p className='text-gray-500 text-lg'>{content}</p>
				</div>
				<button
					className='bg-green-600 hover:bg-green-700 active:bg-green-800 rounded px-4 py-2 font-bold w-fit text-white text-sm'
					onClick={() =>
						scroller.scrollTo('cta', {
							smooth: true,
							duration: 500,
						})
					}
				>
					Tenho interesse
				</button>
			</div>
		</motion.div>
	);
}
