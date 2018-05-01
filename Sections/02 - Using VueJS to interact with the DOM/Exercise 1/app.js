new Vue({
  el: '#exercise',
  data: {
    name: 'Noel',
    age: 28,
    googleImage: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Mount_Everest_as_seen_from_Drukair2.jpg'
  },
  methods: {
    ageXThree: function () {
      return this.age * 3
    },
    randFloat: function () {
      // toFixed added to make the number less annoyingly big
      return Math.random().toFixed(2)
    }
  }
})