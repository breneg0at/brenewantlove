"use client";
import { useState } from "react";

export default function ToggleButton() {
  const [selectedOption, setSelectedOption] = useState("A");

  return (
    <div className="flex primaryButton p-1">
      <button
        className={`px-4 py-2 transition-colors duration-500 ease-in ${
          selectedOption === "A"
            ? "bg-[var(--primary-color)] text-white"
            : "bg-[var(--bg-color)] text-white"
        }`}
        onClick={() => setSelectedOption("A")}
      >
        Plano sem envio pelo WhatsApp - R$19,90
      </button>

      <button
        className={`px-4 py-2 transition-colors duration-500 ease-in ${
          selectedOption === "B"
            ? "bg-[var(--primary-color)] text-white"
            : "bg-[var(--bg-color)] text-white"
        }`}
        onClick={() => setSelectedOption("B")}
      >
        Plano com envio pelo WhatsApp - R$29,90
      </button>
    </div>
  );
}
