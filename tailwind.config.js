/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'  
      },
      
        colors:{
          primary: '#63C132',
          primaryDark: '#358600',
          primaryLight: '#9EE37D',
          dark: '#403939',
        }
      
    },
  },
  plugins: [],
}
