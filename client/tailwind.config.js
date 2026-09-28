/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F6EFE0',
          soft: '#FBF7EE',
          deep: '#EDE2C8',
        },
        forest: {
          50: '#EAF1EC',
          100: '#CFE1D5',
          300: '#6F9C86',
          400: '#3C7B60',
          500: '#1F4B3D', // primary brand green
          600: '#173B30',
          700: '#122E26',
          800: '#0D221C',
          900: '#081712',
        },
        gold: {
          200: '#F0DFAE',
          300: '#E4C57D',
          400: '#D2AC4E',
          500: '#BC9330', // primary accent gold
          600: '#987322',
        },
        ink: {
          DEFAULT: '#211E17',
          soft: '#4A463C',
        },
        brick: {
          400: '#C06A52',
          500: '#A6503A', // negative-sentiment tone, kept warm not neon-red
        },
      },
      fontFamily: {
        display: ['"Marcellus"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 10px -2px rgba(33, 30, 23, 0.10), 0 1px 3px -1px rgba(33, 30, 23, 0.08)',
        lifted: '0 12px 28px -8px rgba(18, 46, 38, 0.25)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pop': {
          '0%': { transform: 'scale(0.85)', opacity: '0.4' },
          '60%': { transform: 'scale(1.08)', opacity: '1' },
          '100%': { transform: 'scale(1)' },
        },
        'check-draw': {
          '0%': { strokeDashoffset: '48' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
        'pop': 'pop 0.35s cubic-bezier(.34,1.56,.64,1) both',
        'check-draw': 'check-draw 0.6s ease-out 0.15s both',
      },
    },
  },
  plugins: [],
};
