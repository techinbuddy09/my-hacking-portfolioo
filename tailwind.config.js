/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'], // Ensure a monospace font like Space Mono is preferred
      },
      colors: {
        'green-400': '#34D399', // A vibrant green
        'green-500': '#10B981', // A slightly darker green for highlights
        'green-600': '#059669', // A deeper green for buttons/accents
        'green-700': '#047857', // Even darker green for borders
        'gray-800': '#1F2937',  // Darker gray for section backgrounds
        'gray-900': '#111827',  // Deep dark gray for overall background and header/footer
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Custom glow animation
        'glitch': 'glitch 0.5s infinite alternate linear', // Glitch effect for text
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Existing Tailwind pulse, renamed for clarity
        'typing': 'typing 4s steps(40, end), blink-caret .75s step-end infinite', // For typewriter cursor
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(52, 211, 153, 0.4), 0 0 10px rgba(52, 211, 153, 0.4), 0 0 15px rgba(52, 211, 153, 0.4)' },
          '50%': { boxShadow: '0 0 15px rgba(52, 211, 153, 0.8), 0 0 30px rgba(52, 211, 153, 0.8), 0 0 45px rgba(52, 211, 153, 0.8)' },
        },
        glitch: {
          '0%': {
            transform: 'translate(0)',
          },
          '20%': {
            transform: 'translate(-2px, 2px)',
          },
          '40%': {
            transform: 'translate(-2px, -2px)',
          },
          '60%': {
            transform: 'translate(2px, 2px)',
          },
          '80%': {
            transform: 'translate(2px, -2px)',
          },
          '100%': {
            transform: 'translate(0)',
          },
        },
        // Re-added blink-caret if it was removed, or if you want a custom blink
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' },
        },
      }
    },
  },
  plugins: [],
}