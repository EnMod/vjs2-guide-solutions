import Vue from "vue"
import App from "./App.vue"

// to create your own directive:
// make your directive before spawning instances that would use it
// declare a name
Vue.directive("colorChange", {
  // declare hooks and args to be used
  bind(el, binding) {
    // in bind you can pass in the element as first arg
    // has all the usual properties of an HTML5 element

    // second arg is binding, or arbitrary arguments to pass in
    // the binding is what's between the directive's "" in the HTML,
    // so to access that you access the value of it
    const what = binding.arg
    if (what == "text") {
      if (binding.modifiers["page"]) document.body.style.color = binding.value
      else el.style.color = binding.value
    } else {
      if (binding.modifiers["page"])
        document.body.style.backgroundColor = binding.value || "blue"
      else el.style.backgroundColor = binding.value || "blue"
    }
  }
})

new Vue({
  el: "#app",
  render: h => h(App)
})
