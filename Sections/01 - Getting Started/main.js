// a VueJS instance - essential for running Vue
new Vue({
  // el: takes string as input akin to CSS selectors,
  // to denote what this Vue instance should control
  // if it's a class, does document.querySelectorAll('class')[0]
  el: '#app',

  // data: object containing data to output or otherwise use
  // automatically renders items here according to templating in the HTML
  data: {
    text: 'What up'
  },

  // methods: operations managed and fired by the VueJS instance
  // managed in an object like data
  methods: {
    // fun fact: you can pass `e` to VueJS methods
    // if you bind them to elements that provide events with e
    changeText: function (e) {

      // in VueJS, `this` is the VueJS instance,
      // so any templating within the `el` element is
      // accessible as a member of `this` when creating methods for 
      // this instance
      this.text = e.target.value
    }
  }
})