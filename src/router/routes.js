// const routes = [
//   {
//     path: '/',
//     component: resolve => {
//       require.ensure([], () => resolve(require('@/views/index')), 'indexView')
//     }
//   },
//   {
//     path: '/home',
//     component: resolve => {
//       require.ensure([], () => resolve(require('@/views/home')), 'homeView')
//     }
//   }
// ]

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "indexView" */ '@/views/index')
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "homeView" */ '@/views/home')
  }
]

export default routes
