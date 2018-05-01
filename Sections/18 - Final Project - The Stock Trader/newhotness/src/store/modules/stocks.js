import stocks from "../data/stocks"

const state = {
  stocks: []
}

const getters = {
  getStocks: state => {
    return state.stocks
  }
}

const mutations = {
  // changes the price of a stock to a random new one,
  // in a given range
  CHANGE_PRICES(state) {
    // use a forEach() because it's an array
    // otherwise if it was an object you'd for(x in y)
    state.stocks.forEach(stock => {
      // doesn't make sense for the volatility to vary between a large range,
      // so it should only be a growth or shrinkage of the original price
      const min = 0.85
      const max = 1.15
      // the tried and true rand * (max - min) + min range calculation
      stock.pps = Math.round(stock.pps * (Math.random() * (max - min) + min))
    })
  },
  INIT_STOCKS(state, stocks) {
    state.stocks = stocks
  },
  LOAD_STOCKS(state) {}
}

const actions = {
  endDay: ({ commit }) => {
    commit("CHANGE_PRICES")
  },
  initStocks: ({ commit }) => {
    commit("INIT_STOCKS", stocks)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
