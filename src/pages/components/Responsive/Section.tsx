type Props = {
	children: string | JSX.Element | JSX.Element[];
	id: string;
};

export default function Section({ children, id }: Props) {
	return (
		<section
			id={id}
			className='py-14 odd:bg-white even:bg-zinc-100'
		>
			{children}
		</section>
	);
}
