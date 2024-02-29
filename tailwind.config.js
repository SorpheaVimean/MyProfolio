const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#FBFADA",
        Background: "#436850",
        Hover: "#ADBC9F",
        BgBtn: "#12372A",
        BgBtnHover: "#01cc7a",
      },
    },
  },
  plugins: [],
});
