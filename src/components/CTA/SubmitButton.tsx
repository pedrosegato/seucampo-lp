import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const status = useFormStatus();

  return (
    <button
      aria-disabled={status.pending}
      disabled={status.pending}
      type="submit"
      id="submit"
      className={`bg-green-600 hover:bg-green-700 active:bg-green-800 rounded px-4 py-2 font-bold w-full text-white text-sm ${
        status.pending && "cursor-not-allowed bg-gray-500 hover:bg-gray-500 active:bg-gray-500"
      }`}
    >
      Enviar
    </button>
  );
};
