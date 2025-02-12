import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
    },
    extend: {
      keyframes: {
        growRight: {
          "0%": { transform: "scaleX(1.2)", transformOrigin: "left" },
          "50%": { transform: "scaleX(1.0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1.2)", transformOrigin: "left" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
      
        shrinkLeft: {
          "0%": { transform: "scaleX(0.8)", transformOrigin: "right" },
          "50%": { transform: "scaleX(1.0)", transformOrigin: "right" },
          "100%": { transform: "scaleX(0.8)", transformOrigin: "right" },
        },
 backgroundSlideLeftToRight: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "10%": { transform: "translateX(0)", opacity: "1" }, // Comes in fully
          "50%": { opacity: "1" }, // Stays fully visible
          "80%": { opacity: "0.7" }, // Starts fading
          "100%": { transform: "translateX(50%)", opacity: "0" }, // Moves out
        },
        backgroundSlide: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "15%": { transform: "translateY(0)", opacity: "1" }, // Comes in
          "40%": { opacity: "1" }, // Fully visible
          "60%": { opacity: "0.5" }, // Start fading out
          "80%": { transform: "translateY(-50%)", opacity: "0" }, // Moves out smoothly
          "100%": { transform: "translateY(-100%)", opacity: "0" }, // Fully out
        },
        marquee: {
          "0%": { transform: "translateX(25%)"},
          "100%": { transform: "translateX(-175%)" },
        },
        growFromBottom: {
          "0%, 100%": { transform: "scaleY(1.0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1.1)", transformOrigin: "top" },
        },
        shrinkFromTop: {
          "0%, 100%": { transform: "scaleY(1.0)", transformOrigin: "bottom" },
          "50%": { transform: "scaleY(0.75)", transformOrigin: "bottom" },
        },
      },
      animation: {
         fadeIin : "fadeIn 0.7s ease-in-out",
        marquee: "marquee 10s linear infinite",        backgroundSlideLeftToRight: "backgroundSlideLeftToRight 10s ease-in-out infinite",
        backgroundSlide: "backgroundSlide 10s ease-in-out infinite",
        growFromBottom: "growFromBottom 4s ease-in-out infinite alternate",
        shrinkFromTop: "shrinkFromTop 4s ease-in-out infinite alternate",
        growRight: "growRight 6s ease-in-out infinite",
        shrinkLeft: "shrinkLeft 6s ease-in-out infinite",
      },
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
