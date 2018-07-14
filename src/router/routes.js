const routes = [
  {
    path: '/',
    component: resolve => {
      require.ensure([], () => resolve(require('@/views/index')), 'indexView')
    }
  },
  {
    path: '/home',
    component: resolve => {
      require.ensure([], () => resolve(require('@/views/home')), 'homeView')
    }
  }
]

export default routes
