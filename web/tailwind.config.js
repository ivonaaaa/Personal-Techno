/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        ibm: "var(--font-ibm-plex-mono)",
        geist: "var(--font-geist-mono)",
      },
    },
  },
  plugins: [],
};
