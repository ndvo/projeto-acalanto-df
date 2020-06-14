module.exports = {
  /* TIP: Customize TailWind classes
   * By setting theme variables in tailwind.config we can use custom TailWind
   * classes
   */
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#de191e',
          dark: '#e12a26',
          darker: '#c01e24'
        },
        secondary: {
          default: '#ffbe00',
          light: '#fcff00'
        },
        dark: "#191ede",
        light: "#1ede19",
      },
    },
  },
  variants: {
    borderWidth: ["responsive", "last", "hover", "focus"],
  },
  plugins: [],
};
