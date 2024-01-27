"use client";

import ResponsiveDiv from "./ResponsiveDiv";

type Props = {
	children: string | JSX.Element | JSX.Element[];
	id: string;
};

export default function Section({ children, id }: Props) {
	return (
		<section
			id={id}
			className="odd:bg-white even:bg-zinc-100 py-14"
		>
			<ResponsiveDiv styles="gap-14">{children}</ResponsiveDiv>
		</section>
	);
}
