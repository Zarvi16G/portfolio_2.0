// src/components/ContactSection.tsx
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const BACKEND_URL = "http://127.0.0.1:8000";

const ContactSection: React.FC = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const response = await fetch(`${BACKEND_URL}/api/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMsg("Network error. Please try again later.");
    }
  };

  return (
    <section
      className={`p-8 rounded-2xl border max-w-2xl mx-auto shadow-2xl transition-colors duration-500 ${
        isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
      }`}
    >
      <h2
        className={`text-3xl font-bold mb-8 text-center uppercase tracking-widest ${
          isDark ? "text-neon-cyan" : "text-cyan-700"
        }`}
      >
        Get In Touch
      </h2>

      {status === "success" ? (
        <div className="text-center p-8 bg-green-900/20 border border-green-500 rounded-lg">
          <h3 className="text-2xl text-green-400 font-bold mb-2">
            Message Sent!
          </h3>
          <p className={isDark ? "text-gray-300" : "text-gray-600"}>
            Thank you for reaching out. I'll get back to you soon.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className={`mt-6 px-6 py-2 rounded transition-colors ${
              isDark
                ? "bg-gray-800 hover:bg-gray-700 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
          >
            Send Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className={`block text-sm font-mono mb-2 uppercase ${
                isDark ? "text-neon-pink" : "text-pink-600"
              }`}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full border rounded p-3 focus:outline-none focus:ring-1 transition-all ${
                isDark
                  ? "bg-cyber-black border-gray-700 text-white focus:border-neon-cyan focus:ring-neon-cyan"
                  : "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500"
              }`}
              placeholder="YOUR NAME"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className={`block text-sm font-mono mb-2 uppercase ${
                isDark ? "text-neon-pink" : "text-pink-600"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full border rounded p-3 focus:outline-none focus:ring-1 transition-all ${
                isDark
                  ? "bg-cyber-black border-gray-700 text-white focus:border-neon-cyan focus:ring-neon-cyan"
                  : "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500"
              }`}
              placeholder="YOUR@EMAIL.COM"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className={`block text-sm font-mono mb-2 uppercase ${
                isDark ? "text-neon-pink" : "text-pink-600"
              }`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className={`w-full border rounded p-3 focus:outline-none focus:ring-1 transition-all resize-y ${
                isDark
                  ? "bg-cyber-black border-gray-700 text-white focus:border-neon-cyan focus:ring-neon-cyan"
                  : "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500"
              }`}
              placeholder="TRANSMIT YOUR MESSAGE..."
            />
          </div>

          {status === "error" && (
            <div className="text-red-500 text-sm font-bold text-center border-red-500 bg-red-900/20 p-2 rounded">
              {errorMsg}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className={`w-full py-4 font-bold uppercase tracking-widest rounded transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
              isDark
                ? "bg-neon-purple hover:bg-purple-600 text-white shadow-md hover:shadow-lg"
                : "bg-purple-600 hover:bg-purple-700 text-white shadow-md hover:shadow-lg"
            }`}
          >
            {status === "submitting" ? "TRANSMITTING..." : "SEND MESSAGE"}
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactSection;
