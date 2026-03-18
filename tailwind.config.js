/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      xs: "450px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#121723",
        dark: "#1D2430",
        primary: "#4A6CF7",
        yellow: "#FBB040",
        "body-color": "#788293",
        "body-color-dark": "#959CB1",
        "gray-dark": "#1E232E",
        "gray-light": "#F0F2F9",
        stroke: "#E3E8EF",
        "stroke-dark": "#353943",
        "bg-color-dark": "#171C28",

        // ─── NEW PALETTE (from image) ───────────────────────
        navy:   "#0E1627",   // Основной текст, хедеры
        mauve:  "#BD8E89",   // Кнопки (fill)
        prune:  "#7F6269",   // Акцент, иконки, подчёркивания
        pink:   "#E5C5C1",   // Subtle backgrounds, badges
        blush:  "#F4E1E0",   // Кнопки hover, светлые секции
        // ────────────────────────────────────────────────────

        // Legacy aliases (для обратной совместимости, если где-то ещё используются)
        sand:        "#FFFFFF",    // → белый фон
        olive:       "#7F6269",    // → prune
        "deep-soil": "#0E1627",    // → navy
      },
      boxShadow: {
        signUp: "0px 5px 10px rgba(14, 22, 39, 0.15)",
        one: "0px 2px 3px rgba(14, 22, 39, 0.05)",
        two: "0px 5px 10px rgba(14, 22, 39, 0.08)",
        three: "0px 5px 15px rgba(14, 22, 39, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.08)",
        "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
        "feature-2": "0px 10px 40px rgba(127, 98, 105, 0.12)",
        submit: "0px 5px 20px rgba(14, 22, 39, 0.10)",
        "submit-dark": "0px 5px 20px rgba(14, 22, 39, 0.10)",
        btn: "0px 1px 2px rgba(14, 22, 39, 0.12)",
        "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.12)",
        "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.08)",
      },
      dropShadow: {
        three: "0px 5px 15px rgba(14, 22, 39, 0.05)",
      },
    },
  },
  plugins: [],
};