// TODO:
// - install and run AXE accesibility plugin
// - configure default SEO (top of config.js)

import { createClient } from '@nuxtjs/sanity'
import fetch from 'node-fetch'
import sectionQueries from './sanityFragments/sectionQueries'

if (!globalThis.fetch) {
  globalThis.fetch = fetch
}

const configSanity = {
  projectId: 'y6e2eewm',
  useCdn: false,
  minimal: true,
  apiVersion: '2021-03-25',
  dataset: 'development',
  // token: process.env.NODE_ENV == "development" ? process.env.SANITY_READ_TOKEN : ''
}
const client = createClient(configSanity)

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dg2go-web-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  googleFonts: {
    subsets: 'latin',
    display: 'swap',
    // download: true,
    // overwriting: true,
    // fontsDir: 'fonts',
    // fontsPath: '~assets/fonts',
    families: {
      Overpass: true,
      'Open+Sans': {
        wght: [400, 600, 700],
        ital: [400, 600],
      },
      Raleway: {
        wght: [400, 800, 900],
      },
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/filters.js',
    '~plugins/preview.client.js',
    '~plugins/image-builder.js',
    '~/plugins/to-link.js',
    '~/plugins/lightbox.client.js',
    // "~/plugins/axe.client.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/sanity/module',
    // '@nuxtjs/google-analytics',
    'nuxt-lazy-load',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/redirect-module', '@nuxtjs/sitemap'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  sanity: {
    ...configSanity,
    withCredentials: true,
    useCdn: true,
  },
}
