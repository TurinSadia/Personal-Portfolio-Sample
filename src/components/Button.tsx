import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
  size?: "small" | "large"; // Define size prop
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  bgColor = "bg-orange", 
  textColor = "text-white", 
  size = "large", 
}) => {
  // Classes for different sizes
  const sizeClasses =
    size === "small"
      ? "py-1 px-4 text-xs w-26 h-8 rounded-sm"
      : "py-2 px-2 text-sm w-full  md:w-40  h-12 rounded-lg"; 

  return (
    <button
      className={`font-bold  ${bgColor} ${textColor} ${sizeClasses}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
