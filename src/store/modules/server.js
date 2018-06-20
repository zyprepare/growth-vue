import { DATA, UPDATE } from '../types.js'
import log from '../../utils/log'
import { getData } from '../../server/index'

const state = {
  'maintainData': [],
  'posts': [
  ],
  'isLoading': false
}

const mutations = {
  [UPDATE](state, val) {
    state.maintainData = val
  },
  updateLoadState(state, val) {
    state.isLoading = val
  }
}

const actions = {
  [DATA](context) {
    context.commit('updateLoadState', true)
    setTimeout(() => {
      getData().then((res) => {
        log(res)
        context.commit(UPDATE, res.data)
        context.commit('updateLoadState', false)
      }).catch(() => {
        context.commit('updateLoadState', false)
      })
    }, 2000)
  }
}

export default { state, mutations, actions }
