<template lang="pug">
  nav.navbar.navbar-default
    ul.nav.navbar-nav.navbar-left
      li: router-link(to="/" exact) Stock Trader 5000
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
      li: strong.navbar-text Funds: {{ getFunds | currency}}
</template>
<script>
import { mapGetters } from "vuex"
import { mapActions } from "vuex"

export default {

  computed: { ...mapGetters(["getFunds", "getFullData"]) },
  methods: {
    ...mapActions(["loadData", "endDay", "changeStatus"]),
    // take the full data object and just throw it in firebase
    saveState() {
      const appState = {
        stocks: this.getFullData.stocks,
        holdings: this.getFullData.portfolio.holdings,
        funds: this.getFunds
      }
      console.log(appState)
      this.$http
        .put(
          "https://v2tcg-sec18-4779.firebaseio.com/saveData.json",
          appState
        )
        .then(() => {
          this.changeStatus("Data saved!")
        })
    },
    // get state from firebase and load it in
    // then change the status
    loadState() {
      this.$http
        .get("https://v2tcg-sec18-4779.firebaseio.com/saveData.json")
        .then(response => {
          return response.json()
        })
        .then(data => {
          // just get the whole data object and push it into the state
          // this.loadData({ data, status: "Data loaded!" })
          // this.changeStatus("Data loaded!")
          //  or do a #DowntownJob
          if (data) {
            const stocks = data.stocks
            const funds = data.funds
            const holdings = data.holdings

            // must be an object for payloading
            // type is whicj LOAD mutation to run
            const portfolioData = {
              type: 'PORTFOLIO',
              holdings,
              funds
            }
            const stockData = {
              type: 'STOCKS',
              stocks
            }

            this.loadData(stockData)
            this.loadData(portfolioData)
          } else alert('Uhh nothing here?')
        })
    }
  },
  filters: {
    currency: value => {
      return `$${value.toLocaleString()}`
    }
  }
}
</script>
<style lang="stylus" scoped>
a {
  cursor: pointer;
}
</style>