new Vue({
  el: '#app',
  data: {
    // toggles for actives
    redActive: false,
    greenActive: false,
    blueActive: false,
    activeClass: '',
    value: '',
    color: 'purple',
    width: 100
  },
  computed: {
    // prop that returns an object
    // this one in particular is for the active classes on the squares
    activeClasses() {
      return {
        red: this.redActive,
        green: this.greenActive,
        blue: this.blueActive
      }
    },
    // returns an object of styles to apply in any
    // `:style="computedStyles"` directive
    computedStyles() {
      return {
        backgroundColor: this.color, // background-color: purple;
        width: `${this.width}px` // width: 100px;
      }
    }
  }
})