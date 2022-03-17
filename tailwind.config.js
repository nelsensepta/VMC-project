const plugin = require("tailwindcss/plugin");
module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Main Color
        primary: "#FFB000",
        second: "#6A6A6A",

        "second-light": "#202020",
        "primary-light": "#FE5E44", // opacity 20%
        spacing: "#FFE600",
        dakrnes: "#0E144A",
        "primary-extra-light": "#FE5E44", // opacity 5%
        "darknes-light": "#0E144A", // opacity 5%
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif", "Arial"],
      second: ["Allerta", "sans-serif", "Arial"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "3rem",
      },
      // screens: {
      //   lg: "1124px",
      //   xl: "1124px",
      //   "2xl": "1124px",
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const utilities = {
        ".bg-glass": {
          background: "rgba( 191, 55, 55, 0.10 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 9.0px )",
          borderRadius: "blur( 9.0px )",
        },
      };

      addUtilities(utilities);
    }),
  ],
};
