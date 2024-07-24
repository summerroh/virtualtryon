const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: {
          DEFAULT: "hsl(0, 0%, 100%)",
          dashboard: "#f4f7fe",
          hero: "#1a1a1a",
        },
        foreground: "hsl(222.2, 47.4%, 11.2%)",
        muted: {
          DEFAULT: "hsl(210, 40%, 96.1%)",
          foreground: "hsl(215.4, 16.3%, 46.9%)",
          text: "#707eae",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(222.2, 47.4%, 11.2%)",
        },
        border: "hsl(214.3, 31.8%, 91.4%)",
        input: "hsl(214.3, 31.8%, 91.4%)",
        card: {
          DEFAULT: "#ffffff",
          foreground: "hsl(222.2, 47.4%, 11.2%)",
        },
        primary: {
          DEFAULT: "#4047f6",
          foreground: "hsl(210, 40%, 98%)",
          light: "#f1f2fe",
        },
        secondary: {
          DEFAULT: "hsl(210, 40%, 96.1%)",
          foreground: "hsl(222.2, 47.4%, 11.2%)",
        },
        accent: {
          DEFAULT: "hsl(210, 40%, 96.1%)",
          foreground: "hsl(222.2, 47.4%, 11.2%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 100%, 50%)",
          foreground: "hsl(210, 40%, 98%)",
        },
        ring: "hsl(215, 20.2%, 65.1%)",
        button: {
          background: "#fafcfe",
          secondary: "#8a4bf2",
        },
        yellow: "#ffed4e",

        lightblue: "#faf0f0",
        red: {
          DEFAULT: "#e95050",
          light: "#faf0f0",
        },
        green: {
          DEFAULT: "#49733E !important",
          light: "#F0FAF4",
        },
      },

      borderRadius: {
        xl: "40px",
        lg: "0.75rem",
        md: "calc(0.75rem - 2px)",
        sm: "calc(0.75rem - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      // fontFamily: {
      //   sans: ["var(--font-sans)", ...fontFamily.sans],
      // },
      boxShadow: {
        header: "0 13px 35px -12px rgba(35, 35, 35, 0.1)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
