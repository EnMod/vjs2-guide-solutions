<template lang="pug">
  //- contains:
  .fluid-container
    //- Buy widget for each stock
    transition-group
      app-stock(v-for="(stock, i) in stocks" :key="i" :stock="stock")

</template>
<script>
import { mapGetters } from "vuex"
import { mapActions } from "vuex"
import Stock from "./Stock.vue"

export default {
  computed: {
    ...mapGetters({
      stocks: "getStocks"
    })
  },
  components: {
    "app-stock": Stock
  }
}
</script>
<style lang="stylus" scoped>
</style>