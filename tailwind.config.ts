import type {Config} from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ProHang Brand Colors - Strict Color Palette
        prohang: {
          'light-blue': '#A6D3F1',     // HEX #A6D3F1 | CMYK 43, 5, 8, 0 | RGB 166, 210, 240
          'lime': '#BAD655',           // HEX #BAD655 | CMYK 31, 0, 85, 0 | RGB 186, 214, 84
          'navy': '#3D85C6',           // HEX #3D85C6 | CMYK 75, 40, 0, 0 | RGB 61, 133, 198
          'dark-navy': '#0A4369',      // HEX #0A4369 | CMYK 100, 76, 35, 21 | RGB 10, 67, 105
          // Adding missing colors used in shop page
          'blue': '#3D85C6',           // Alias for navy
          'light': '#A6D3F1',          // Alias for light-blue
        },
        // Text colors using brand palette
        text: {
          'primary': '#0A4369',        // ProHang Dark Navy for primary text
          'secondary': '#3D85C6',      // ProHang Navy for secondary text
          'accent': '#BAD655',         // ProHang Lime for accents
          'light': '#A6D3F1',          // ProHang Light Blue for light text
        },
        // Additional colors for UI consistency (keeping minimal grays for borders/backgrounds)
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        // ProHang Typography - Brand Guidelines Implementation
        'sans': ['Aktiv Grotesk', 'Inter', 'system-ui', '-apple-system', 'sans-serif'], // Primary brand font for body
        'display': ['Aktiv Grotesk', 'Inter', 'system-ui', '-apple-system', 'sans-serif'], // Primary brand font
        'heading': ['DIN Next LT Pro', 'Roboto Condensed', 'system-ui', '-apple-system', 'sans-serif'], // Brand font for headings
        'body': ['Aktiv Grotesk', 'Inter', 'system-ui', '-apple-system', 'sans-serif'], // Primary brand font for body
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'prohang': '0 4px 14px 0 rgba(61, 133, 198, 0.15)',
        'prohang-lg': '0 10px 25px 0 rgba(61, 133, 198, 0.2)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
} satisfies Config; 