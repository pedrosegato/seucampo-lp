import Image from "next/image";

type Props = {
	imgsrc: string;
	imgalt: string;
	description: string;
};

export default function PreviewCard({ imgsrc, imgalt, description }: Props) {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
			<Image
				src={imgsrc}
				alt={imgalt}
				width={1280}
				height={720}
				className="rounded-lg"
			/>
			<p className="text-sm">{description}</p>
		</div>
	);
}
