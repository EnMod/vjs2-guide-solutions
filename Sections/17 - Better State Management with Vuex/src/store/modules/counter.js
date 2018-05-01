const state = {
  counter: 0
}

const getters = {
  doubleCounter: state => {
    return state.counter * 2
  },
  stringCounter: state => {
    return `${state.counter} clicks`
  }
}

const mutations = {
  increment: (state, incrementor) => {
    state.counter += incrementor
  },
  decrement: (state, decrementor) => {
    state.counter -= decrementor
  }
}

const actions = {
  incIt: context => {
    context.commit("increment")
  },
  decIt: context => {
    context.commit("decrement")
  },
  asyncIncIt: (context, incrementor) => {
    setTimeout(() => {
      context.commit("increment", decrementor)
    }, 1000)
  },
  asyncDecIt: (context, decrementor) => {
    setTimeout(() => {
      context.commit("decrement", decrementor)
    }, 1000)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
