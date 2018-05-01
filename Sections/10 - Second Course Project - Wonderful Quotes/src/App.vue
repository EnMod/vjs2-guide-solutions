<template>
    <div class="container">
        <infobar 
          :status="status" 
          :message="message"
          />
        <add-quote 
          :quotesCur="quotes.length" 
          @newQuote="addQuote"
          />
        <!-- pass the quotes themselves in
        rule of thumb:
        if a component doesn't haaaave to manage it,
        bring the data up to the parent -->
        <quote-bin 
          :quotesMax="quotesMax"
          :quotes="quotes"
          @quoteDeleted="removeQuote"
          />
        <tracker 
          :quotesCur="quotes.length" 
          :quotesMax="quotesMax" 
          />
    </div>
</template>

<script>
import Infobar from "./components/Infobar.vue"
import Tracker from "./components/Tracker.vue"
import QuoteBin from "./components/Quotes/QuoteBin.vue"
import AddQuote from "./components/Quotes/AddQuote.vue"
import { eventBus } from "./main"

export default {
  components: {
    Infobar,
    QuoteBin,
    AddQuote,
    Tracker
  },
  data() {
    // pass the quotes themselves in
    // rule of thumb:
    // if a component doesn't haaaave to manage it,
    // bring the data up to the parent
    return {
      quotesMax: 15,
      quotes: [],
      status: "alert-info",
      message: `Enter your quote and click "Add Quote" to add more quotes!<br>
      Click on a quote to remove it.`
    }
  },
  methods: {
    // add an item of text quoteText to the quotes
    addQuote(quoteText) {
      if (this.quotes.length >= this.quotesMax) {
        this.status = `alert-danger`
        this.message = `Too many quotes already! Remove some then try again.`
      } else {
        this.quotes.push(quoteText)
        this.statusUpdate()
      }
    },
    // rip out a single quote at the signaled index
    removeQuote(index) {
      this.quotes.splice(index, 1)
      this.statusUpdate()
    },
    statusUpdate() {
      this.status = `alert-success`
      this.message = `There are a total of ${this.quotes.length} quotes.`
    }
  }
}
</script>

<style>

</style>
