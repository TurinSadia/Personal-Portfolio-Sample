"use client";

import React, { useState } from "react";

interface ProgressBarProps {
  name: string;
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ name, value }) => {
  const [rangeValue, setRangeValue] = useState<number>(value);

  return (
    <div className="box-border font-bold flex flex-col bg-[var(--accent-color)] p-1">
      <p>{name}</p>
      <input
        className="w-full appearance-none h-2 rounded-lg"
        type="range"
        value={rangeValue}
        min="0"
        max="100"
        onChange={(e) => {
          const newValue = Number(e.target.value);
          setRangeValue(newValue);

          // Dynamically set the background gradient for the filled part of the progress bar
          e.target.style.setProperty("--value", `${(newValue / 100) * 100}%`);
        }}
        style={{
          background: `linear-gradient(to right, #FF8233 ${rangeValue}%, #e5e7eb ${rangeValue}%)`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
