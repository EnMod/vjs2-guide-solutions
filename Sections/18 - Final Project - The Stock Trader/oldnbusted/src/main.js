import Vue from "vue"
import VueResource from "vue-resource"
import VueRouter from "vue-router"
import { routes } from "./routes"
import { store } from "./store/store"

import App from "./App.vue"

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
})