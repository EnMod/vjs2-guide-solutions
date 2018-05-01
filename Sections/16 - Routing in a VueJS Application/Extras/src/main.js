import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import { routes } from "./routes"

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    // if there's a saved position (say, if the user was in the route before),
    // send the user back to that position
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      // else if the to route has a hash defined,
      // use native selector-scroll behavior and scroll to that
      // you could also just set it to like from.hash
      // to mess with people
      return {
        selector: to.hash
      }
      // else, just shove the user down to the 700px mark
    } else {
      return { x: 0, y: 700 }
    }
  }
})

router.beforeEach((to, from, next) => {
  next()
})

new Vue({
  el: "#app",
  router,
  render: h => h(App)
})
