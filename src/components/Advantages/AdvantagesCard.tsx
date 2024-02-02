type Props = {
	icon?: string | JSX.Element | JSX.Element[];
	title: string;
	description: string;
};

export default function AdvantagesCard({ icon, title, description }: Props) {
	return (
		<div className="flex flex-col gap-5 items-center text-center lg:text-justify lg:items-start">
			<div className="border border-emerald-700 p-4 text-emerald-700 rounded-lg w-fit hover:bg-emerald-700 hover:text-white transition-all duration-200 ease-in-out">
				{icon}
			</div>
			<div className="flex flex-col gap-3">
				<h3 className="font-bold text-emerald-700 text-lg">{title}</h3>
				<p className="text-sm">{description}</p>
			</div>
		</div>
	);
}
