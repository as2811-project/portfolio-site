import React from "react";
import Chip from "./Chips"; // Adjust the path if needed

const chipData = [
  { color: "bg-red-500 text-white", text: "Analytics", position: "chip-0" },
  { color: "bg-blue-500 text-white", text: "Backend", position: "chip-1" },
  { color: "bg-green-500 text-white", text: "Python", position: "chip-2" },
  { color: "bg-yellow-500 text-white", text: "JavaScript", position: "chip-3" },
  {
    color: "bg-lime-500 text-white",
    text: "Data Science",
    position: "chip-5",
  },
  { color: "bg-fuchsia-700 text-white", text: ".NET", position: "chip-6" },
];

const FloatingChips: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {chipData.map((chip, index) => (
        <Chip
          key={index}
          color={chip.color}
          text={chip.text}
          className={`absolute animate-float ${chip.position}`}
        />
      ))}
    </div>
  );
};

export default FloatingChips;
