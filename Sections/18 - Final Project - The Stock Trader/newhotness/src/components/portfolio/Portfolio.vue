<template lang="pug">
  //- contains:
  .fluid-container
    h1 Portfolio
    div(v-if="Object.keys(holdings).length == 0")
      p You have no stocks!
    //- Sell widgets ONLY for stocks on hand
    transition-group(tag="ul" name="slide" v-else)
      app-holding(v-for="(holding, i) in holdings" :key="i" :holding="holding")
</template>
<script>
import { mapGetters } from "vuex"
import { mapActions } from "vuex"
import Holdings from "./Holdings.vue"

export default {
  computed: {
    ...mapGetters({
      holdings: "getPortfolio"
    })
  },
  components: {
    "app-holding": Holdings
  }
}
</script>