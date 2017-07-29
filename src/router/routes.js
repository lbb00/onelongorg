
/* 打包，异步加载 */
const Home = r => require.ensure([], () => r(require('../views/Home/Home.vue')), 'view-home')
const Projects = r => require.ensure([], () => r(require('../views/Projects/Projects.vue')), 'view-projects')
const ItsMe = r => require.ensure([], () => r(require("../views/It'sMe/It'sMe.vue")), 'view-home')

const routes = [
  {
    path: '/',
    component: Home
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/projects',
    component: Projects
  }, {
    path: "/It'sMe",
    component: ItsMe
  }
]

export default routes
