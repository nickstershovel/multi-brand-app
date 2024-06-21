// https://nuxt.com/docs/api/configuration/nuxt-config
const brand = process.env.BRAND || 'brand_a'

export default defineNuxtConfig({
  srcDir: brand,
  alias: {
    '@common': '../common',
  },
  dir: {
    layouts: '../common/layouts'
  }
})