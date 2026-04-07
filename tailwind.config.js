/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-cyan': '#00f5ff',
        'neon-purple': '#bf00ff',
        'neon-blue': '#0080ff',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px #00f5ff' },
          '100%': { textShadow: '0 0 20px #00f5ff, 0 0 30px #00f5ff' },
        },
      },
    },
  },
  plugins: [],
}

