"use client";

import SubmitButton from "./SubmitButton";
import { useFormState } from "react-dom";
import { registerContact } from "@/services/contact";

const initialState: FormActionResult = {
	message: "",
	type: "success",
};

export default function Form() {
	const [state, formAction] = useFormState(registerContact, initialState);
	return (
		<>
			<form
				className="flex flex-col gap-3"
				action={formAction}
			>
				<fieldset className="flex flex-col md:flex-row gap-5">
					<div className="flex flex-col gap-2 w-full md:w-[50%]">
						<p className="font-bold text-gray-500">E-mail</p>
						<input
							type="email"
							placeholder="email@exemplo.com"
							className="bg-gray-200 p-3 rounded outline-0 w-full"
							name="email"
							id="email"
							required
						/>
					</div>
					<div className="flex flex-col gap-2 w-full md:w-[50%]">
						<p className="font-bold text-gray-500">Telefone</p>
						<input
							type="tel"
							name="phone"
							maxLength={15}
							pattern="\(\d{2}\)\s*\d{5}-\d{4}"
							placeholder="(11) 91234-5678"
							className="bg-gray-200 p-3 rounded outline-0 w-full"
							id="phone"
							required
						/>
					</div>
				</fieldset>
				<SubmitButton />
			</form>
			{state.type === "success" && (
				<p className="text-green-500 text-sm">{state.message}</p>
			)}
			{state.type === "error" && (
				<p className="text-red-500 text-sm">{state.message}</p>
			)}
		</>
	);
}
