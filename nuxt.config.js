export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - SmileSユーザーブロマガ',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: 'SmileSエージェントが執筆したものの、手間の都合でチャンネルブロマガに掲載できなかった記事を公開するサイトです。' },
      //{ name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'SmileSユーザーブロマガ' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://nico-smiles.github.io/userblomaga/' },
      { hid: 'og:title', property: 'og:title', content: 'SmileSユーザーブロマガ' },
      { hid: 'og:description', property: 'og:description', content: 'SmileSエージェントが執筆したものの、手間の都合でチャンネルブロマガに掲載できなかった記事を公開するサイトです。' },
      //{ hid: 'og:image', property: 'og:image', content: 'https://vcnp.nekozuki.me/img/ogp.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style/pc_main.scss',
    '@/static/common/css/blomaga_preset.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    'nuxt-fontawesome',
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
