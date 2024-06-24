/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Include all relevant files from both brand-specific and common directories
    `./brand_${process.env.BRAND || 'allwell'}/components/**/*.{vue,js,ts}`,
    `./brand_${process.env.BRAND || 'allwell'}/layouts/**/*.vue`,
    `./brand_${process.env.BRAND || 'allwell'}/pages/**/*.vue`,
    `./brand_${process.env.BRAND || 'allwell'}/plugins/**/*.{js,ts}`,
    './common/**/*.{vue,js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#FF0000',
        'brand-secondary': '#00FF00',
      },
      fontFamily: {
        'brand-sans': ['Arial', 'sans-serif'],
        'brand-serif': ['Georgia', 'serif'],
      },
    },
  },
  plugins: [
  ],
}