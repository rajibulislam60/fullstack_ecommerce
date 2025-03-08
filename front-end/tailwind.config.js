const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "400px",
          md: "700px",
          lg: "984px",
          xl: "1170px",
          "2xl": "1280px",
        },
      },
      colors: {
        primary: "#000000",
      },
    },
  },
  plugins: [],
});
