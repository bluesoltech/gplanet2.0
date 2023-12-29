/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#273775",
        secondaryColor: "#21285B",
        greenColor: "#159D00",
        buttonColor: "EEB31E",
        textColor: "#4E545F",
        headingColor: "#181A1E",
      },

      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
};
