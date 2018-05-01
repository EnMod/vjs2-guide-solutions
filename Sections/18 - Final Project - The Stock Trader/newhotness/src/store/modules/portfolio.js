const state = {
  holdings: [
    // Facebook: {
    // name: "Facebook"
    // shares: 100,
    // pps: this.$store.getters.getStockInfo("Facebook").price
    // }
  ],
  funds: 10000
}

const getters = {
  getPortfolio: state => {
    return state.holdings
  },
  getFunds: state => {
    return state.funds
  },
  getPortfolioValue: state => {
    if (state.holdings.length > 0) {
      let portVal = 0
      state.holdings.forEach(stock => {
        portVal += stock.shares * stock.pps
      })
      return `$${portVal.toLocaleString()}`
    } else return 0
  }
}

const mutations = {
  BUY_SHARES(state, { name, pps, shares }, getters) {
    const orderFill = shares * pps

    // check if the stock is currently held
    // .find() loops through all items in an array
    // conditions set in its callback are the search criteria
    const stock = state.holdings.find(stock => stock.name == name)

    // if the stock is not held,
    // add it to the portfolio
    if (!stock) {
      state.holdings.push({
        name,
        shares
      })
      // otherwise add to its shares
    } else stock.shares += shares

    // subtract funds based on pps of stock and shares specified
    state.funds -= orderFill
  },
  SELL_SHARES(state, { name, pps, shares }) {
    const stock = state.holdings.find(item => item.name == name)
    const orderFill = shares * pps

    // if the portfolio has enough shares of this stock to close the sale,
    // run the sell logic
    state.funds += orderFill
    stock.shares -= shares

    // splice out the stock from the portfolio,
    // if and only if the order reduces the total shares to 0
    if (stock.shares == 0)
      state.holdings.splice(state.holdings.indexOf(stock), 1)
  },
  LOAD_PORTFOLIO(state, pl) {
    state.funds = pl.funds
    // only set if there's an incoming portfolio
    // otherwise, init
    state.holdings = pl.holdings ? pl.holdings : []
  }
}

const actions = {
  buyShares: ({ commit }, pl) => {
    // console.log(pl)
    commit("BUY_SHARES", pl)
  },
  sellShares: ({ commit }, pl) => {
    commit("SELL_SHARES", pl)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
