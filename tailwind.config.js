/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        neon: {
          pink: '#ff1f71',
          blue: '#00d4ff',
          purple: '#7928ca',
          cyan: '#21d4fd',
        },
        dark: {
          DEFAULT: '#0a0b0f',
          '50': '#111217',
          '100': '#151821',
          '200': '#1a1f2c',
          '300': '#1f2437',
          '400': '#242a42',
          '500': '#2a304d',
          '600': '#2f3658',
          '700': '#353c63',
          '800': '#3a426e',
          '900': '#3f4879',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'dark-gradient': 'linear-gradient(to right, #0a0b0f, #151821)',
      },
      boxShadow: {
        'neon-glow': '0 0 5px theme(colors.neon.blue), 0 0 20px theme(colors.neon.blue)',
        'neon-pink-glow': '0 0 5px theme(colors.neon.pink), 0 0 20px theme(colors.neon.pink)',
      },
    },
  },
  plugins: [],
};