const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.svelte"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        lg: "720px",
        xl: "960px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
