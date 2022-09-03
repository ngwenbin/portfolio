/* eslint-disable react/jsx-props-no-spreading */
import clsx from "clsx";
import { useField } from "remix-validated-form";
import type { InputHTMLAttributes } from "react";

interface FormTextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  name: string;
  label?: string;
  labelClassName?: string;
  inputclassName?: string;
  helperText?: string;
  helperTextClassName?: string;
  type?: string;
}

const FormTextArea = ({
  id,
  name,
  label,
  labelClassName,
  inputclassName,
  helperText,
  helperTextClassName,
  type = "text",
  ...Props
}: FormTextAreaProps) => {
  const { error, getInputProps, validate } = useField(id);
  return (
    <label
      htmlFor={id}
      className={clsx(
        "block text-sm font-base text-gray-100 w-full",
        labelClassName
      )}
    >
      {label}
      <div className="mt-1">
        <textarea
          {...getInputProps({
            id,
            onBlur: () => {
              validate();
            },
          })}
          id={id}
          name={name}
          rows={7}
          className={clsx(
            "appearance-none block w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500",
            inputclassName,
            {
              "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500":
                error,
            }
          )}
          {...Props}
        />
      </div>
      <div className={clsx("body-small mt-2 text-red-600")} id={`${id}-error`}>
        {error}
      </div>
    </label>
  );
};

export default FormTextArea;
