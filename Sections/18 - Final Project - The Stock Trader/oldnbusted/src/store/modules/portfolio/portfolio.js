const state = {
  portfolio: {
    // Facebook: {
    // name: "Facebook"
    // shares: 100,
    // pps: this.$store.getters.getStockInfo("Facebook").price
    // }
  },
  funds: 10000
}

const getters = {
  getPortfolio: state => {
    return state.portfolio
  },
  getFunds: state => {
    return state.funds
  },
  getPortfolioValue: state => {
    console.log(state.portfolio)
    if (Object.keys(state.portfolio).length > 0) {
      let portVal = 0
      console.log("did it")
      for (let stock in state.portfolio) {
        portVal += stock.shares * stock.pps
      }
      return portVal
    } else return 0
  }
}

const mutations = {
  shareBuy: (state, pl) => {
    const stockName = pl.name
    const orderFill = pl.shares * pl.pps

    // if the user has enough positive funds, run the buy logic
    if (state.funds > 0 && state.funds > orderFill) {
      // if the portfolio does not contain this stock,
      // add it to the portfolio
      if (!state.portfolio[stockName]) {
        state.portfolio[stockName] = {
          name: stockName,
          shares: 0,
          pps: Number(pl.pps)
        }
        state.portfolio[stockName].shares = pl.shares

        // otherwise add to its shares
      } else state.portfolio[stockName].shares += pl.shares

      // subtract funds based on pps of stock and shares specified
      state.funds -= orderFill

      // otherwise, deny the action
    } else alert("Nah, not possible.")
  },
  shareSell: (state, pl) => {
    const stockName = pl.name
    if (state.portfolio[stockName]) {
      const newShares = state.portfolio[stockName].shares - pl.shares
      const orderFill = pl.shares * pl.pps

      // if the portfolio has enough shares of this stock to close the sale,
      // run the sell logic
      if (newShares >= 0) {
        state.funds += orderFill
        state.portfolio[stockName].shares = newShares

        // delete the stock from the portfolio,
        // if and only if the order reduces the total shares to 0
        if (newShares == 0) delete state.portfolio[stockName]
      } else alert("Nah, not possible.")
    } else alert("Nah, not possible.")
  }
}

const actions = {
  buyShares: ({ commit }, pl) => {
    // console.log(pl)
    commit("shareBuy", pl)
  },
  sellShares: ({ commit }, pl) => {
    commit("shareSell", pl)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
