import React from "react";

type InputProps = {
  placeholder?: string;
  name?: string;
  error?: any;
  styles?: string;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  name,
  error,
  styles,
  ...props
}) => {
  const errorMsg = error[name || ""]?.message;
  return (
    <input
      {...props}
      placeholder={placeholder}
      name={name}
      className={
        `bg-transparent border-b-4 border-[#E6E6E6] p-2 max-w-32 text-white outline-none ${
          errorMsg ? "border-red-500" : ""
        } ${styles}`
      }
    />
  );
};

export default Input;
