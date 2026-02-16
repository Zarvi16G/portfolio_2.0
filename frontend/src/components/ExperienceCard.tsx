// src/components/ExperienceCard.tsx
import React, { useState } from "react";
import type { Experience } from "../types";
import { useTheme } from "../context/ThemeContext";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <div
      className={`relative pl-8 border-l-2 transition-colors duration-300 py-4 group ${
        isDark
          ? "border-gray-800 hover:border-neon-pink"
          : "border-gray-300 hover:border-pink-500"
      }`}
    >
      {/* 🟣 Timeline Dot */}
      <div
        className={`absolute -left-2.25 top-6 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
          isDark
            ? "bg-cyber-black border-gray-600 group-hover:border-neon-pink group-hover:bg-neon-pink shadow-sm group-hover:shadow-md"
            : "bg-white border-gray-400 group-hover:border-pink-500 group-hover:bg-pink-500 shadow-sm group-hover:shadow-md"
        }`}
      ></div>

      <div
        className={`p-6 rounded-lg border transition-all flex flex-col items-center text-center w-full ${
          isDark
            ? "bg-gray-900 border-transparent hover:border-gray-700"
            : "bg-gray-50 border-transparent hover:border-gray-300"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-1 transition-colors ${
            isDark
              ? "text-white group-hover:text-neon-pink"
              : "text-gray-900 group-hover:text-pink-600"
          }`}
        >
          {experience.title}
        </h3>
        <h4
          className={`font-mono text-sm mb-4 ${
            isDark ? "text-neon-cyan" : "text-cyan-700"
          }`}
        >
          @{experience.company}
        </h4>

        <div
          className={`mb-4 inline-block px-3 py-1 rounded text-xs font-mono border ${
            isDark
              ? "bg-black text-gray-400 border-gray-800"
              : "bg-gray-100 text-gray-600 border-gray-300"
          }`}
        >
          {experience.start_date} — {experience.end_date || "Present"}
        </div>

        {/* Collapsible Description with Grid Transition */}
        <div className="w-full">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-full cursor-pointer list-none text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 mb-2 focus:outline-none ${
              isDark
                ? "text-gray-500 hover:text-white"
                : "text-gray-400 hover:text-gray-900"
            }`}
          >
            <span>{isOpen ? "Hide Details" : "Show Details"}</span>
            <span
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          <div
            className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p
                className={`leading-relaxed whitespace-pre-line text-left p-4 rounded border text-sm ${
                  isDark
                    ? "text-gray-300 bg-gray-900 border-gray-800"
                    : "text-gray-600 bg-gray-100 border-gray-200"
                }`}
              >
                {experience.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
