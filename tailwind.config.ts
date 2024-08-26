/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors"
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      ...colors,
      textColorlight:"#62C3C6",
      textColorBold:"#045A5C",
      primaryGreen:"#ECFEAA", 
      secondaryBlue:"#365758",
    }
  },
  plugins: [],
};
