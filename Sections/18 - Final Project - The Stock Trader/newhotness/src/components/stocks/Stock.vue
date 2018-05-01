<template lang="pug">
  .col-sm-6.col-md-4
    .panel.panel-info
      .panel-heading: h3.panel-title {{ stock.name }} (Price: {{ stock.pps }})
      br
      //- input to set shares to buy
      //- on change, updates the sharesToBuy object with the current stock and its value
      .panel-body
        .pull-left: input.form-control(:class="{danger: notPossible || notEnough}" type="number" v-model="shareCount")
        //- buy button that deducts funds and adds shares of that stock to portfolio according to input
        .pull-right: button.btn(:class="{'btn-danger': notPossible || notEnough, 'btn-success': !notPossible}" :disabled="disabled" @click="buyAction") {{ buttonMessage }}
</template>
<script>
import { mapGetters } from "vuex"
import { mapActions } from "vuex"
export default {
  // take in stock data from what's passed in from the overseer
  props: ["stock"],
  data() {
    return {
      shareCount: 0
    }
  },
  computed: {
    ...mapGetters(['getFunds']),
    // implement the "Nah, not possible." logic RIGHT onto the button,
    // that way you don't have to mess around with doing it in your
    // mutation logic
    notPossible() {
      return this.shareCount < 0
    },
    notEnough() {
      return this.shareCount * this.stock.pps > this.getFunds
    },
    // in that case I put it in its own computed property
    // for some reason you can't inline it like max showed...
    disabled() {
      return this.notPossible || this.notEnough || this.shareCount <= 0 || Number.isInteger(this.shareCount)
        ? true
        : false
    },
    // changes the buttons' messages based on what the shareCount is
    buttonMessage() {
      let message = 'Buy'
      if (this.notPossible) message = 'Nah, not possible'
      else if (this.notEnough) message = 'Not enough cash...stranger.'
      else if (this.shareCount == 0) message = 'Enter a value'
      return message
    }
  },
  methods: {
    ...mapActions(["buyShares"]),
    // sends the given name over to the buy action,
    // along with the sharesToBuy for that stock
    buyAction() {
      const order = {
        name: this.stock.name,
        pps: this.stock.pps,
        shares: Number(this.shareCount)
      }
      this.buyShares(order)
      this.shareCount = 0
    }
  }
}
</script>
<style lang="stylus" scoped>
.danger
  border: 1px solid red
</style>