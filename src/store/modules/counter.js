import { INCREASE, RESET } from '../types.js'

const state = {
  count: 1,
  countObj: {
    count: 1,
    type: 1
  }
}

const mutations = {
  [INCREASE](state) {
    state.count++
  },
  [RESET](state) {
    state.count = 0
  },
  updateType(state, type) {
    state.countObj.type = type
  }
}

export default { state, mutations }
