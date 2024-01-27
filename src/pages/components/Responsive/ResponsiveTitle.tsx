type Props = {
	children: string | JSX.Element | JSX.Element[];
	styles?: string;
};

export default function ResponsiveTitle({ children, styles }: Props) {
	return (
		<h1
			className={`text-center text-emerald-700 text-2xl md:text-4xl font-bold ${styles}`}
		>
			{children}
		</h1>
	);
}
