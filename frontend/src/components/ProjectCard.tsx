// src/components/ProjectCard.tsx
import React, { useState } from "react";
import type { Project } from "../types";
import { useTheme } from "../context/ThemeContext";

interface ProjectCardProps {
  project: Project;
}
const BACKEND_URL_2 = "http://localhost:8000";
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <div
      className={`group relative border rounded-lg overflow-hidden transition-all duration-300 flex flex-col items-center text-center w-full max-w-sm shrink-0 ${
        isDark
          ? "bg-cyber-black border-neon-purple hover:border-neon-pink shadow-md hover:shadow-xl"
          : "bg-white border-gray-200 hover:border-pink-400 shadow-md hover:shadow-xl"
      }`}
    >
      {/* 🖼️ Image Section */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={`${BACKEND_URL_2}${project.image}`}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
      </div>

      {/* 📝 Text Content */}
      <div className="p-6 w-full flex flex-col items-center">
        <h3
          className={`text-2xl font-bold mb-2 tracking-wider uppercase italic ${
            isDark ? "text-neon-cyan" : "text-gray-900"
          }`}
        >
          {project.name}
        </h3>

        {/* Collapsible Description with Grid Transition */}
        <div className="w-full mb-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-full cursor-pointer list-none text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 mb-2 focus:outline-none ${
              isDark
                ? "text-neon-pink hover:text-white"
                : "text-pink-600 hover:text-gray-900"
            }`}
          >
            <span>{isOpen ? "Hide Description" : "View Description"}</span>
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
                className={`leading-relaxed whitespace-pre-line text-left text-sm p-3 rounded border ${
                  isDark
                    ? "text-gray-400 bg-gray-900 border-gray-800"
                    : "text-gray-600 bg-gray-50 border-gray-200"
                }`}
              >
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* 🛠️ Technologies */}
        <div className="mb-6 w-full flex flex-col items-center">
          <h4
            className={`text-xs font-bold uppercase tracking-widest mb-2 border-b pb-1 inline-block ${
              isDark
                ? "text-neon-purple border-gray-800"
                : "text-purple-700 border-gray-300"
            }`}
          >
            Tech Stack
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {project.technologies.map((tech) => (
              <div
                key={tech.name}
                className={`flex items-center gap-2 px-3 py-1 rounded-full border transition-colors ${
                  isDark
                    ? "bg-gray-900 border-gray-700 hover:border-neon-cyan"
                    : "bg-gray-100 border-gray-300 hover:border-pink-400"
                }`}
              >
                {tech.icon && (
                  <img
                    src={`${BACKEND_URL_2}${tech.icon}`}
                    alt={tech.name}
                    className="w-4 h-4 object-contain"
                  />
                )}
                <span
                  className={`text-xs font-mono ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 🔗 Links Section */}
        <div className="mt-auto">
          {project.url && (
            <a
              href={project.url}
              className={`px-4 py-2 border text-sm font-bold tracking-tighter inline-block transition-colors duration-300 ${
                isDark
                  ? "border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-white shadow-sm hover:shadow-md"
                  : "border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white shadow-sm hover:shadow-md"
              }`}
            >
              VIEW PROJECT
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
