module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {// <html foo="bar" amp></html>
      lang: 'zh-cmn-Hans',
      amp: undefined // "amp" has no value
    },
    title: 'onelong',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // hid，为了避免子组件中的meta标签不能正确覆盖父组件中相同的标签而产生重复的现象，建议利用 hid 键为meta标签配一个唯一的标识编号
      { hid: 'main', name: 'keywords', content: 'onelong,曹云龙,前端开发,nodejs' },
      { hid: 'main', name: 'description', content: 'onelong的个人网站和博客，前端开发工程师，沉迷二次元无法自拔。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    {src: '~assets/style/reset.less', lang: 'less'}
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#08bfcd' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['axios', 'fundebug-javascript']
  },
  plugins: [{src: '~plugins/fundebug-javascript.js', ssr: false}]
}
