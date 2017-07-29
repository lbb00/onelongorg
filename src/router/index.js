// 引入vue，vue-router
import Vue from 'vue'
import Router from 'vue-router'

// 引入routes
import routes from './routes'

// 启用vue-router
Vue.use(Router)

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  return { x: 0, y: 0 }
}

// 创建路由并导出
export default new Router({
  mode: 'history',
  base: __dirname,
  routes,
  scrollBehavior
})
