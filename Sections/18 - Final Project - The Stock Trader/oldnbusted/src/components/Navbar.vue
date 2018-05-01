<template lang="pug">
  nav.navbar.navbar-default
    ul.nav.navbar-nav.navbar-left
      li: router-link(to="/" active-class="active" exact) Stock Trader 5000
      li: router-link(to="/portfolio" active-class="active") Portfolio
      li: router-link(to="/stocks" active-class="active") Stocks
    ul.nav.navbar-nav.navbar-right
      //- Action link to end day - Clicks randomize all prices within a range
      li: a(@click="endDay") End Day
      li.dropdown
        a.dropdown-toggle(href='#' data-toggle='dropdown' role='button') Save/Load
          span.caret
        ul.dropdown-menu
          //- save data writes current relevant state to an external database
          li: a(@click="saveState") Save data
          //- load data replaces all current state with that of the external database
          li: a(@click="loadState") Load data
      li: a(href="#"): strong Funds: {{ getFunds }}
</template>
<script>
import { mapGetters } from "vuex"
import { mapActions } from "vuex"

export default {
  data() {
    return {}
  },
  computed: { ...mapGetters(["getFunds", "getFullData"]) },
  methods: {
    ...mapActions(["saveData", "loadData", "endDay", "changeStatus"]),
    // take the full data object and just throw it in firebase
    saveState() {
      this.$http
        .put(
          "https://v2tcg-sec18.firebaseio.com/saveData.json",
          this.getFullData
        )
        .then(() => {
          this.changeStatus("Data saved!")
        })
    },
    // get state from firebase and load it in
    // then change the status
    loadState() {
      this.$http
        .get("https://v2tcg-sec18.firebaseio.com/saveData.json")
        .then(response => {
          return response.json()
        })
        .then(data => {
          // just get the whole data object and push it into the state
          this.loadData({ data, status: "Data loaded!" })
          this.changeStatus("Data loaded!")
        })
    }
  }
}
</script>
<style lang="stylus" scoped>
a {
  cursor: pointer;
}
</style>