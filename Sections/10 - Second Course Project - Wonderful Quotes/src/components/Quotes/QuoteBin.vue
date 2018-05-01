<template>
<div>
  <!-- renders out all the quotes available -->
  <div class="row">
    <!-- pass the quote itself through to the component -->
    <!-- no sense in trying at all to define it within the quote component itself -->
    <app-quote :key="i" v-for="(quote, i) in quotes" @click.native="removeQuote(i)">
      {{ quote }}
    </app-quote>
  </div>
</div>
</template>
<script>
import { eventBus } from "../../main"
import Quote from "./Quote.vue"

export default {
  props: ["quotes"],
  components: {
    "app-quote": Quote
  },
  data() {
    return {}
  },
  computed: {
    quotesCur() {
      return this.quotes.length
    }
  },
  methods: {
    removeQuote(index) {
      // tell the app to delete the item
      // then tell the info box to update with
      // new info
      this.$emit("quoteDeleted", index)
      eventBus.$emit("statusChange", {
        class: `alert-success`,
        message: `There are a total of ${this.quotesCur} quotes.`
      })
    }
  }
}
</script>
<style scoped>

</style>