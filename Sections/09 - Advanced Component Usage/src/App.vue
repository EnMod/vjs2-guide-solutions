<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <!-- make some buttons that will 
              change which component shows up
              below -->
               <button @click="selectedComponent = 'app-quote'">Quote</button>
               <button @click="selectedComponent = 'app-author'">Author</button>
               <button @click="selectedComponent = 'app-new-quote'">NewQuote</button>
               <!-- keep-alive prevents destruction of
               components switched in and out by <component> -->
               <keep-alive>
                <component :is="selectedComponent"></component>
               </keep-alive>
               <!-- <app-quote>
                   <h1 slot="title">
                       {{ title }}
                   </h1>
                   <p slot="quote">{{ quote }}</p>
               </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
import Quote from "./components/Quote.vue"
import Author from "./components/Author.vue"
import NewQuote from "./components/NewQuote.vue"

export default {
  components: {
    "app-quote": Quote,
    "app-author": Author,
    "app-new-quote": NewQuote
  },
  data() {
    return {
      title: "B O I",
      // make a state here for which component
      // is currently selected
      selectedComponent: "app-quote"
    }
  }
}
</script>

<style>

</style>
