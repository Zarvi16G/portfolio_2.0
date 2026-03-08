// src/components/SkillCard.tsx
import React from "react";
import type { Skill } from "../types";
import { useTheme } from "../context/ThemeContext";

interface SkillCardProps {
  skill: Skill;
}

const BACKEND_URL = "http://127.0.0.1:8000";

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`flex flex-col items-center justify-center p-6 border rounded-lg transition-all duration-300 group w-56 shrink-0 ${
        isDark
          ? "bg-cyber-black border-gray-800 hover:border-neon-cyan hover:shadow-lg"
          : "bg-white border-gray-200 hover:border-cyan-500 hover:shadow-lg"
      }`}
    >
      {skill.icon ? (
        <img
          src={`${BACKEND_URL}${skill.icon}`}
          alt={skill.name}
          className={`w-16 h-16 mb-4 object-contain transition-all ${
            isDark
              ? "filter group-hover:drop-shadow-[0_0_8px_rgba(0,247,255,0.5)]"
              : "filter group-hover:drop-shadow-[0_0_8px_rgba(0,150,200,0.4)]"
          }`}
        />
      ) : (
        <div
          className={`w-16 h-16 mb-4 rounded-full flex items-center justify-center border ${
            isDark
              ? "bg-gray-900 border-gray-700 group-hover:border-neon-cyan"
              : "bg-gray-100 border-gray-300 group-hover:border-cyan-500"
          }`}
        >
          <span
            className={`text-2xl font-bold ${
              isDark
                ? "text-gray-500 group-hover:text-neon-cyan"
                : "text-gray-400 group-hover:text-cyan-600"
            }`}
          >
            {skill.name[0]}
          </span>
        </div>
      )}
      <h3
        className={`text-xl font-bold tracking-wider uppercase ${
          isDark
            ? "text-gray-300 group-hover:text-neon-cyan"
            : "text-gray-700 group-hover:text-cyan-600"
        }`}
      >
        {skill.name}
      </h3>
    </div>
  );
};

export default SkillCard;
