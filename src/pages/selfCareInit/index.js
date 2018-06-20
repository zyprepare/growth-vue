import Vue from 'vue'
import router from '../../router'
import store from '../../store'
import VueLazyLoad from 'vue-lazyload'

if (module.hot) {
  // 实现热更新
  module.hot.accept();
}

new Vue({
  router,
  store
}).$mount('#app')

Vue.use(VueLazyLoad, {
})
