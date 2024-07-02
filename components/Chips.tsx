import React from "react";

interface ChipProps {
  color: string;
  text: string;
  className?: string;
}

const Chip: React.FC<ChipProps> = ({ color, text, className }) => {
  return (
    <span
      className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-medium ${color} transition-colors duration-300 ease-in-out ${className}`}
    >
      {text}
    </span>
  );
};

export default Chip;
