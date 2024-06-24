// https://nuxt.com/docs/api/configuration/nuxt-config
const brand = process.env.BRAND || 'allwell'

export default defineNuxtConfig({
  srcDir: `brand_${brand}`,
  alias: {
    '@common': '../common',
  },
  dir: {
    layouts: '../common/layouts'
  },
  css: [
    '../common/assets/css/main.css',
    // Brand-specific CSS
    `../brand_${brand}/assets/css/brand.css`
  ],
})