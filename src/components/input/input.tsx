import React from "react";

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
};

const Input: React.FC<InputProps> = ({
  value = "",
  onChange,
  placeholder,
  name,
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      className="border border-[#E6E6E6] rounded-md p-4 xs:w-full lg:w-[500px]"
    />
  );
};

export default Input;
