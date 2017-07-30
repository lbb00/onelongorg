// 引入vue，vue-router
import Vue from 'vue'
import Router from 'vue-router'

// 引入routes
import routes from './routes'

// 引入nprogress
import nprogress from 'nprogress'

// 启用vue-router
Vue.use(Router)

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  return { x: 0, y: 0 }
}

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes,
  scrollBehavior
})

router.beforeEach((to, from, next) => {
  nprogress.start() // 展现滚动条
  next()
})
router.afterEach(transition => {
  nprogress.done()
})

// 创建路由并导出
export default router
