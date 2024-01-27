"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
	title: string;
	content: string | JSX.Element | JSX.Element[];
	imgurl: string;
	imgalt: string;
	left?: boolean;
};

export default function AboutMeCards({
	title,
	content,
	imgurl,
	imgalt,
	left,
}: Props) {
	return (
		<motion.section
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className={`flex gap-10 flex-col lg:flex-row text-center md:text-left items-center ${
				left && "lg:flex-row-reverse"
			}`}
		>
			<div className="lg:w-[50%]">
				<Image
					src={imgurl}
					alt={imgalt}
					width={1280}
					height={720}
					objectFit="contain"
					className=""
				/>
			</div>
			<div className="flex flex-col justify-between items-center md:items-start lg:w-[50%] gap-5">
				<div className="flex flex-col gap-5">
					<h3 className="text-2xl font-bold text-emerald-700">
						{title}
					</h3>
					<p className="text-gray-500">{content}</p>
				</div>
				<a
					href="#cta"
					className="bg-green-600 hover:bg-green-700 active:bg-green-800 rounded px-4 py-2 font-bold w-fit text-white"
				>
					Tenho interesse!
				</a>
			</div>
		</motion.section>
	);
}
