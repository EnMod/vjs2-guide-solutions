import Vue from "vue"
import App from "./App.vue"
import Home from "./components/Home.vue"

// register Home globally
Vue.component("home", Home)

new Vue({
  el: "#app",
  render: h => h(App)
})
