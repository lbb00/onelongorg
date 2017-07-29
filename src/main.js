
import Vue from 'vue'
import App from './App'

// 引入router
import router from './router/index'

// 引入reset
import './assets/style/reset.less'

// 引入NProgress的样式
import 'nprogress/nprogress.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
