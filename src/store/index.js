import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import server from './modules/server'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { counter, server }
})
