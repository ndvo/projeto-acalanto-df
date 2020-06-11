module.exports = {
  /* TIP: Customize TailWind classes
   * By setting theme variables in tailwind.config we can use custom TailWind
   * classes
   */
  theme: {
    extend: {
      colors: {
        primary: "#648eff",
        secondary: "#ff3232",
        dark: "#2d2d2d",
        light: "#d2f2ff",
        "ws-blue": {
          100: "#E6F0FF",
          200: "#BFDAFF",
          300: "#99C3FF",
          400: "#4D97FE",
          500: "#006AFE",
          600: "#005FE5",
          700: "#004098",
          800: "#003072",
          900: "#00204C",
        },
      },
    },
  },
  variants: {
    borderWidth: ["responsive", "last", "hover", "focus"],
  },
  plugins: [],
};
