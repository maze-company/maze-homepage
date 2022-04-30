const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      // custom colors
      primary: "#42B7C1",
      "primary-light": "#E1FFFF",
      "primary-dark": "#008993",
      secondary: "#312B71",
      "secondary-light": "#11468F",
      background: "#0F0D22",

      // tailwind colors
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
    },
    extend: {
      backgroundImage: {
        splash:
          "linear-gradient(0deg, rgba(49 43 113 / 50%), rgba(0 137 147 / 50%)), url('/splash.jpg')",
        "splash-about":
          "linear-gradient(0deg, rgba(49 43 113 / 33%), rgba(0 137 147 / 25%)), url('/splash-about.jpg')",
        "splash-project":
          "linear-gradient(0deg, rgba(49 43 113 / 25%), rgba(0 137 147 / 25%)), url('/splash-project.jpg')",
      },
      fontFamily: {
        sans: ["Gothic A1", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
