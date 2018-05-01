<template lang="pug">
  //- contains:
  .fluid-container
    div(v-if="Object.keys(portfolio).length == 0")
      p You have no stocks!
    //- Sell widgets ONLY for stocks on hand
    transition-group(tag="ul" name="slide" v-else)
      li(v-for="(stockInfo, stock) in portfolio" :key="stock")
        //- stock name (price:shares)
        p {{ stock }} (Price: {{ stockInfo.pps }} | Shares held: {{ stockInfo.shares }})
        br
        //- input to set shares to sell
        input(type="number" @change="updateShares(stock, $event.target.value)")
        //- sell button that deducts shares and adds funds to funds count according to input and price of stock at time of sell
        button(@click="sellAction(stockInfo.name)") Sell
</template>
<script>
import { mapGetters } from "vuex"
import { mapActions } from "vuex"
export default {
  data() {
    return {
      sharesToSell: {}
    }
  },
  computed: {
    ...mapGetters({
      portfolio: "getPortfolio",
      stocks: "getStocks"
    })
  },
  methods: {
    ...mapActions(["sellShares"]),
    updateShares(stockName, shares) {
      this.sharesToSell[stockName] = Number(shares)
    },
    // grabs shares from a given stock's entry in what to sell,
    // as well as the pps of said stock from the stocks getter,
    // then sends them along to the shareSell function
    sellAction(stockName) {
      const sellOrder = {
        name: stockName,
        shares: this.sharesToSell[stockName],
        pps: this.stocks[stockName].pps
      }
      this.sellShares(sellOrder)
    }
  }
}
</script>
<style lang="stylus" scoped>
.slide-enter-active {
  animation: slide-in 0.15s ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 0.15s ease-out forwards;
  position: absolute;
}

.slide-move {
  transition: transform 0.15s;
}

@keyframes slide-in {
  from {
    transform: translateX(-200px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0);
    opacity: 1;
  }

  to {
    transform: translateX(-200px);
    opacity: 0;
  }
}
</style>