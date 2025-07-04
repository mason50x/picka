/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        shimmer: 'shimmer 2s linear infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        fadeIn: 'fadeIn 0.2s ease-in-out forwards',
        slideDown: 'slideDown 0.3s ease-out forwards',
        slideInLeft: 'slideInLeft 0.3s ease-out forwards',
        spin: 'spin 1s linear infinite',
        checkmark: 'checkmark 0.2s ease-in-out forwards',
        'fade-in-up': 'fade-in-up 0.5s ease-out', // Added for chat bubbles
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Added for typing indicator
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          'from': { transform: 'translateX(-100%)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        checkmark: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'fade-in-up': { // Added for chat bubbles
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  safelist: [
    'animate-checkmark',
    'animate-slideDown',
    'animate-fadeIn',
    'animate-slideInLeft'
  ]
};