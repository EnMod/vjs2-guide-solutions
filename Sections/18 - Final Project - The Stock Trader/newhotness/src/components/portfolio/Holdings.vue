<template lang="pug">
  .col-sm-6.col-md-4
    .panel.panel-info
      .panel-heading: h3.panel-title {{ holding.name }} (Price: {{ holdingPps }})
      br
      //- input to set shares to sell
      //- on change, updates the sharesToSell object with the current stock and its value
      .panel-body
        .pull-left
          p Held: {{ holding.shares }}
          input.form-control(:class="{danger: notPossible || notEnough}" type="number" v-model="shareCount")
        //- sell button that deducts funds and adds shares of that stock to portfolio according to input
        .pull-right: button.btn(:class="{'btn-danger': notPossible || notEnough, 'btn-success': !notPossible}" :disabled="disabled" @click="sellAction") {{ buttonMessage }}
</template>
<script>
import { mapGetters } from "vuex"
import { mapActions } from "vuex"
export default {
  props: ["holding"],
  data() {
    return {
      shareCount: 0
    }
  },
  computed: {
    // get the stocks so we can draw from the pps of each one
    ...mapGetters(['getStocks']),
    disabled() {
      return this.notPossible || this.notEnough || this.shareCount <= 0 || Number.isInteger(this.shareCount)
        ? true
        : false
    },
    notPossible() {
      return this.shareCount < 0
    },
    notEnough() {
      return this.holding.shares - this.shareCount < 0
    },
    buttonMessage() {
      let message = 'Sell'
      if (this.notPossible) message = 'Nah, not possible'
      else if (this.notEnough) message = 'Not enough shares...stranger.'
      else if (this.shareCount == 0) message = 'Enter a value'
      return message
    },
    // find stock info in the market for this holding
    holdingPps() {
      const stock = this.getStocks.find(stock => stock.name == this.holding.name)
      return stock.pps
    }
  },
  methods: {
    ...mapActions(["sellShares"]),
    // sends the given name over to the buy action,
    // along with the sharesToBuy for that stock
    sellAction() {
      const order = {
        name: this.holding.name,
        pps: this.holdingPps,
        shares: this.shareCount
      }
      this.sellShares(order)
      this.shareCount = 0
    }
  }
}
</script>
<style lang="stylus" scoped>
.danger
  border: 1px solid red
</style>