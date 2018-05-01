<template lang="pug">
  //- contains:
  .fluid-container
    //- Buy widget for each stock
    transition-group(tag="ul")
      li(v-for="(stock, i) in stocks" :key="stock.name")
        //- stock name (price)
        p {{ stock.name }} (Price: {{ stock.pps }})
        br
        //- input to set shares to buy
        //- on change, updates the sharesToBuy object with the current stock and its value
        input(type="number" @change="updateShares(stock.name, $event.target.value)")
        //- buy button that deducts funds and adds shares of that stock to portfolio according to input
        button(@click="buyAction(stock.name)") Buy
</template>
<script>
import { mapGetters } from "vuex"
import { mapActions } from "vuex"
export default {
  data() {
    return {
      sharesToBuy: {}
    }
  },
  computed: {
    ...mapGetters({
      stocks: "getStocks",
      portfolio: "getPortfolio"
    })
  },
  methods: {
    ...mapActions(["buyShares"]),
    // updates the sharesToBuy
    updateShares(stockName, shares) {
      let pps = 0
      this.sharesToBuy[stockName] = {
        name: stockName,
        shares: Number(shares),
        pps: this.stocks[stockName].pps
      }
    },
    // sends the given name over to the buy action,
    // along with the sharesToBuy for that stock
    buyAction(stockName) {
      this.buyShares(this.sharesToBuy[stockName])
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>