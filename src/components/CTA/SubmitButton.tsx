import { useFormStatus } from "react-dom";

export default function SubmitButton() {
	const status = useFormStatus();
	return (
		<button
			aria-disabled={status.pending}
			disabled={status.pending}
			type="submit"
			id="submit"
			className={`bg-green-600 hover:bg-green-700 active:bg-green-800 rounded px-4 py-2 font-bold w-full text-white text-sm ${
				status.pending &&
				"cursor-not-allowed !bg-zinc-500 hover:!bg-zinc-500 active:!bg-zinc-500"
			}`}
		>
			Enviar
		</button>
	);
}
