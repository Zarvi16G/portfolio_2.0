// src/components/ProfileCard.tsx
import React from "react";
import type { Profile } from "../types";
import { useTheme } from "../context/ThemeContext";

interface ProfileCardProps {
  profile: Profile;
}

const BACKEND_URL = "http://127.0.0.1:8000";

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      className={`max-w-4xl mx-auto border-2 rounded-xl overflow-hidden transition-all duration-500 ${
        isDark
          ? "bg-cyber-black border-neon-purple shadow-xl hover:shadow-2xl"
          : "bg-white border-gray-300 shadow-xl hover:shadow-2xl"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center">
        {/* 🖼️ Profile Image */}
        <div className="md:w-1/3 relative group overflow-hidden w-full">
          <img
            src={`${BACKEND_URL}${profile.image}`}
            alt={profile.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
          />
          <div
            className={`absolute inset-0 ${
              isDark
                ? "bg-linear-to-t from-cyber-black to-transparent"
                : "bg-linear-to-t from-white to-transparent"
            }`}
          ></div>
        </div>

        {/* 📝 Content */}
        <div className="md:w-2/3 p-8 flex flex-col items-center text-center">
          {/* Name + Theme Toggle */}
          <div className="flex items-center gap-4 mb-2">
            <h2
              className={`text-4xl font-bold tracking-tighter uppercase ${
                isDark ? "text-neon-cyan" : "text-gray-900"
              }`}
            >
              {profile.name}
            </h2>
            {/* 🌙/☀️ Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all duration-300 cursor-pointer ${
                isDark
                  ? "border-neon-cyan text-neon-cyan hover:bg-neon-cyan/20"
                  : "border-gray-400 text-yellow-500 hover:bg-yellow-100"
              }`}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>

          <p
            className={`text-sm font-mono mb-6 tracking-widest uppercase ${
              isDark ? "text-neon-pink" : "text-pink-600"
            }`}
          >
            {profile.email}
          </p>

          <div className="prose prose-invert max-w-none mb-8 w-full">
            <p
              className={`leading-relaxed text-lg whitespace-pre-line text-left ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {profile.description}
            </p>
          </div>

          {/* 🔗 Social Media Icons */}
          <div className="flex flex-wrap gap-6 mt-auto justify-center">
            {profile.social_media.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-3 rounded-lg border transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? "bg-gray-900 border-neon-purple hover:border-neon-cyan"
                    : "bg-gray-100 border-gray-300 hover:border-pink-500"
                }`}
                title={social.name}
              >
                <div
                  className={`absolute inset-0 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDark ? "bg-neon-cyan" : "bg-pink-500"
                  }`}
                ></div>
                {social.icon ? (
                  <img
                    src={`${BACKEND_URL}${social.icon}`}
                    alt={social.name}
                    className={`w-8 h-8 relative z-10 filter hover:brightness-125 ${
                      isDark ? "" : "invert-0"
                    }`}
                  />
                ) : (
                  <span
                    className={`font-bold p-2 ${
                      isDark ? "text-neon-cyan" : "text-pink-600"
                    }`}
                  >
                    {social.name[0]}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
