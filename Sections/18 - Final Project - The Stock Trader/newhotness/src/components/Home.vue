<template lang="pug">
div
  h1 Stock Trader 5000
  p Welcome! Click on the Stocks tab to buy stocks, and the Portfolio tab to sell them!
  p Don't forget to use the Save/Load options to save/load your data if things go wrong.
  br
  p Current value of portfolio: {{ portfolioValue }}

</template>
<script>
import { mapGetters } from "vuex"
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      portfolioValue: "getPortfolioValue"
    })
  }
}
</script>
<style lang="stylus" scoped>
</style>