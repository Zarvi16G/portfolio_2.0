// src/components/AttributionCard.tsx
import React from "react";
import type { Attribution } from "../types";
import { useTheme } from "../context/ThemeContext";

interface AttributionCardProps {
  attribution: Attribution;
}

const AttributionCard: React.FC<AttributionCardProps> = ({ attribution }) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`text-xs transition-colors ${
        isDark
          ? "text-gray-600 hover:text-gray-400"
          : "text-gray-500 hover:text-gray-700"
      }`}
    >
      <span className="font-bold">{attribution.title}</span> by{" "}
      <a
        href={attribution.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-colors ${
          isDark
            ? "text-neon-cyan hover:text-neon-pink"
            : "text-cyan-700 hover:text-pink-600"
        }`}
      >
        {attribution.name}
      </a>
    </div>
  );
};

export default AttributionCard;
