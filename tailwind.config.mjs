/** @type {import('tailwindcss').Config} */

import amazingAnimations from 'amazing-tailwind-animations'
import theme from 'amazing-tailwind-animations/theme'
const {animation} = theme

const safelist = Object.keys(animation).map((key) => `animate-${key}`)
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {}
  },
  plugins: [amazingAnimations],
  safelist
}
