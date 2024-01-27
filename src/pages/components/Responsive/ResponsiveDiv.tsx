"use client";

type Props = {
	children: string | JSX.Element | JSX.Element[];
	styles?: string;
};

export default function ResponsiveDiv({ children, styles }: Props) {
	return (
		<div
			className={`w-[300px] md:w-[600px] xl:w-[900px] mx-auto flex flex-col ${styles}`}
		>
			{children}
		</div>
	);
}
