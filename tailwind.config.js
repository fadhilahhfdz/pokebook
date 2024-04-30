const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        kodeMono: ["Kode Mono", "monospace"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};