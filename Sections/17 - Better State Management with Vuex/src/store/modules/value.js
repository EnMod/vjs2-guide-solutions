const state = {
  value: 0
}

const getters = {
  value: state => {
    return state.value
  }
}

const mutations = {
  updateVal: (state, pl) => {
    state.value = pl
  }
}

const actions = {
  updateVal: ({ commit }, pl) => {
    commit("updateVal", pl)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
