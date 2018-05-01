import Vue from "vue"
import Vuex from "vuex"
import VueResource from "vue-resource"

import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

import portfolio from "./modules/portfolio/portfolio"
import stocks from "./modules/stocks/stocks"

// import module from "./modules/module"

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
