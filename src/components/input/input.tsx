import React from "react";

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  error?: any;
};

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  name,
  error,
  ...props
}) => {
  const errorMsg = error[name || ""]?.message;
  return (
    <div className="flex flex-col">
      <input
        {...props}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        className="border border-[#E6E6E6] rounded-md p-4 xs:w-full lg:w-[500px] text-darkBlack"
      />
      {errorMsg && <p className="text-[#ff2c2c] p-2">{errorMsg}</p>}
    </div>
  );
};

export default Input;
