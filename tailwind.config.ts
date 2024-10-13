import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '15px' ,
      },
      colors :{
        orange: '#FF8233',
        gray: '#F8F8F8',
        deepGray: '#545454',
        lightGray: '#AFAFAF',
        whiteGray : ' #797979',

      },
      input: {
         orange: '#FF8233'
      }

    },
  },
  plugins: [],
};
export default config;
