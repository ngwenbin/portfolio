/* eslint-disable react/jsx-props-no-spreading */
import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { useIsSubmitting } from "remix-validated-form";

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactNode;
  className?: string;
}

export default function FormButton({
  children = "Submit",
  className,
  ...props
}: FormButtonProps) {
  const isSubmitting = useIsSubmitting();

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={clsx("w-min whitespace-nowrap", className)}
      {...props}
    >
      {isSubmitting ? "Submitting" : children}
    </button>
  );
}
