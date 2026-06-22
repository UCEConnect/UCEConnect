import type { InputHTMLAttributes } from "react";

type InputProps =
  InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps) {
  return (
    <input
      className="
        w-full
        rounded-lg
        border
        border-gray-300
        px-4
        py-2
        focus:outline-none
        focus:ring-2
        focus:ring-primary
      "
      {...props}
    />
  );
}

export default Input;