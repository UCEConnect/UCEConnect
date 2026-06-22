import type { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}

function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-primary text-white hover:opacity-90",

    secondary:
      "bg-accent text-white hover:opacity-90",

    danger:
      "bg-danger text-white hover:opacity-90",
  };

  return (
    <button
      className={`
        rounded-lg
        px-4
        py-2
        font-medium
        transition
        ${variants[variant]}
        ${className}
      `}
      {...props}
    />
  );
}

export default Button;