/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        // Breakpoints padrão (você pode modificar)
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        
        // Ou adicionar breakpoints personalizados
        // 'tablet': '900px',
        // 'desktop': '1200px',
      },
    },
  },
  plugins: [],
}