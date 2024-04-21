import animations from '@midudev/tailwind-animations'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      transitionProperty: {
        tilt: 'all 400ms cubic-bezier(0.03,0.98,0.52,0.99) 0s'
      },
      fontFamily: {
        inter: ['Inter Variable', ...defaultTheme.fontFamily.sans],
        inder: ['Inder', ...defaultTheme.fontFamily.sans]
      },
      lineHeight: {
        default: '140%'
      },
      colors: {
        light: '#fcfcfc',
        dark: '#060606'
      },
      screens: {
        xs: '360px',
        '3xl': '1650px',
        ...defaultTheme.screens
      }
    }
  },
  plugins: [animations]
}
