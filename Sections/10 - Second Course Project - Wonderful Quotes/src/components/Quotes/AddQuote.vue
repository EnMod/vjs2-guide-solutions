<template>
  <div class="row">
    <div class="form-group col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
      <label>Quote Entry</label>
      <textarea class="form-control" name="quoteEntry" id="" cols="30" rows="10" placeholder="Enter quotes here" v-model="quoteText"/>
    </div>
    <div class="form-group col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
      <button class="btn btn-primary" @click.prevent="addQuote">Add Quote</button>
    </div>
  </div>
</template>
<script>
import { eventBus } from "../../main"

export default {
  props: ["quotesCur", "maxQuotesReached"],
  data() {
    return {
      quoteText: ""
    }
  },
  methods: {
    addQuote() {
      // tell the app manager there's a new quote
      this.$emit("newQuote", this.quoteText)
      // clear the box
      this.quoteText = ""
    }
  }
}
</script>
<style scoped>

</style>