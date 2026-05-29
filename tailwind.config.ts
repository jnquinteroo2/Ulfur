import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "var(--color-void)",
        blood: "var(--color-blood)",
        ash: "var(--color-ash)",
        bone: "var(--color-bone)",
        rust: "var(--color-rust)",
        silver: "var(--color-silver)",
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        condensed: ["var(--font-barlow-condensed)", "sans-serif"],
        body: ["var(--font-crimson-text)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;