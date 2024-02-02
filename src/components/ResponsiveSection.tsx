type Props = {
	children?: string | JSX.Element | JSX.Element[];
	className?: string;
};

export default function ResponsiveSection({ children, className }: Props) {
	return (
		<section
			className={`w-[300px] md:w-[600px] lg:w-[1000px] flex flex-col mx-auto ${className}`}
		>
			{children}
		</section>
	);
}
