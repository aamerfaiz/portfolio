import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        babypink: "#F4C2C2"
      },
      backgroundImage:{
        'herobg': "url('/images/testbg.png')",
        'cardbg': "url('/images/sky.png')",
        'kfk':"url('/images/khorfakkan.jpg')"

      }
    },
  },
  plugins: [],
};
export default config;
