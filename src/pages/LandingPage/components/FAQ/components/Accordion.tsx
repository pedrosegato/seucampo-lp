'use client';

import { useState } from 'react';

type Props = {
	question: string;
	answer: string;
};

export default function Accordion({ question, answer }: Props) {
	const [open, setOpen] = useState(false);
	return (
		<div className='py-2 border-b last:border-0 border-zinc-300 flex flex-col gap-4'>
			<button
				onClick={() => setOpen(!open)}
				className='flex flex-row w-full font-bold gap-5 items-center text-left'
			>
				<svg
					className='fill-zinc-500 shrink-0'
					width='16'
					height='16'
					xmlns='http://www.w3.org/2000/svg'
				>
					<rect
						y='7'
						width='16'
						height='2'
						rx='1'
						className={`transform origin-center transition duration-200 ease-out ${
							open && '!rotate-180'
						}`}
					/>
					<rect
						y='7'
						width='16'
						height='2'
						rx='1'
						className={`transform origin-center rotate-90 transition duration-200 ease-out ${
							open && '!rotate-180'
						}`}
					/>
				</svg>
				<span className='text-emerald-700'>{question}</span>
			</button>
			<div
				className={`grid overflow-hidden transition-all duration-300 ease-in-out text-zinc-500 pl-9 ${
					open
						? 'grid-rows-[1fr] opacity-100 pb-5'
						: 'grid-rows-[0fr] opacity-0 pb-0'
				}`}
			>
				<p className='overflow-hidden'>{answer}</p>
			</div>
		</div>
	);
}
