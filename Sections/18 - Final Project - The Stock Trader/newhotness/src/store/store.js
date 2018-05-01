import Vue from "vue"
import Vuex from "vuex"

import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

import portfolio from "./modules/portfolio"
import stocks from "./modules/stocks"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    status: "ayy lmao"
  },
  getters,
  mutations,
  actions,
  modules: {
    portfolio,
    stocks
  }
})
