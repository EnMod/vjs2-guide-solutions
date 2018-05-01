const state = {
  stocks: {
    Facebook: { name: "Facebook", pps: 100, ppsMin: 10, ppsMax: 200 },
    Amazon: { name: "Amazon", pps: 200, ppsMin: 20, ppsMax: 400 },
    Netflix: { name: "Netflix", pps: 300, ppsMin: 30, ppsMax: 600 },
    Google: { name: "Google", pps: 400, ppsMin: 400, ppsMax: 800 }
  }
}

const getters = {
  getStocks: state => {
    return state.stocks
  }
}

const mutations = {
  // changes the price of a stock to a random new one,
  // in a given range
  priceChanger: state => {
    // console.log(state.stocks)
    for (let stock in state.stocks) {
      const priceRange = state.stocks[stock].ppsMax - state.stocks[stock].ppsMin
      const newPrice = Math.round(Math.random() * priceRange)

      state.stocks[stock].pps = newPrice
    }
  }
}

const actions = {
  endDay: ({ commit }) => {
    commit("priceChanger")
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
