// a reusable component
Vue.component(`heyy`, {
  template: `
    <h1>doi it</h1>
    `
})

// Instance 1
new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function () {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
    },
    // is run on click of the button
    updateTitle: function (title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function () {
      return this.title.toLowerCase();
    }
  },
  watch: {
    // because the updateTitle() method changes this.title,
    // this watch runs whenever that method executes
    title: function (value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

// Instance 2
new Vue({
  el: '#app2',
  data: {
    title: 'The VueJS Instance'
  }
});
