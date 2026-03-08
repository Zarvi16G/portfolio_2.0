/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cyber-black": "#0f0e17",
        "neon-pink": "#ff0080",
        "neon-cyan": "#00f7ff",
        "neon-purple": "#7b2cbf",
      },
    },
  },
  plugins: [],
};
