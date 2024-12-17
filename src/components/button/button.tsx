import React from "react";

interface ButtonProps {
  title: string;
  buttonStyles?: string;
  disabled?: boolean;
  onClick?: (e: any) => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  buttonStyles = "",
  onClick,
  disabled,
  ...props
}) => {
  return (
    <button
    {...props}
      onClick={onClick}
      className={`bg-yellow-400 text-black cursor-pointer font-medium px-10 py-3 rounded-lg transition duration-300 ease-in-out hover:bg-yellow-500 hover:shadow-lg ${buttonStyles} ${disabled && "opacity-50"}`}
    >
      {title}
    </button>
  );
};

export default Button;
