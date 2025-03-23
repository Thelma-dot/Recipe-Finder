module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        customBlue: '#1E3A8A', // Example custom color
      },
    },
  },
  plugins: [
    // Example of adding a plugin
    require('@tailwindcss/typography'),
  ],
}
