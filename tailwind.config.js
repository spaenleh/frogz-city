/** @type {import('tailwindcss').Config} */
import tailwindTypography from '@tailwindcss/typography'
import daisyui from 'daisyui'

export default {
  content: ['./resources/**/*.{edge,js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#60a5fa',
          'secondary': '#c084fc',
          'accent': '#f59e0b',
          'neutral': '#bfdbfe',
          'base-100': '#faf8f8',
          'info': '#93c5fd',
          'success': '#a3e635',
          'warning': '#fcd34d',
          'error': '#f87171',
        },
      },
    ],
  },
  plugins: [tailwindTypography, daisyui],
}
