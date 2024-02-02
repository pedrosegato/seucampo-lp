type Props = {
	children?: string | JSX.Element | JSX.Element[];
	color?: string;
	className?: string;
};

export default function ResponsiveSection({
	children,
	color,
	className,
}: Props) {
	return (
		<section className={`py-20 ${color ?? ""}`}>
			<div
				className={`w-[300px] md:w-[600px] lg:w-[1000px] flex flex-col mx-auto ${
					className ?? ""
				}`}
			>
				{children}
			</div>
		</section>
	);
}
