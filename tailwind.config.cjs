const daisyui = require("daisyui");
const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [forms, typography, daisyui],

  //daisyui: {
  //  themes: ["light", "night"],
  //},
  daisyui: {
    themes: ["garden", "dim"],//true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "lemonade"]
    darkTheme: "dim", // name of one of the included themes for dark mode
    lightTheme: "garden", // name of one of the included themes for light mode // fake line
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};

module.exports = config;
