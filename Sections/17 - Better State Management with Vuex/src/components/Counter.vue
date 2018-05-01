<template>
    <div>
        <button class="btn btn-primary" @click="increment(10)">Increment</button>
        <button class="btn btn-primary" @click="decrement(10)">Decrement</button>
    </div>
</template>

<script>
// import { mapMutations } from "Vuex"
import { mapActions } from "Vuex"

export default {
  methods: {
    components: {},
    // old n busted
    // increment() {
    //   this.$emit("updated", 1)
    // },
    // decrement() {
    //   this.$emit("updated", -1)
    // }
    // new hotness
    // increment() {
    //   this.$store.state.counter++
    // },
    // decrement() {
    //   this.$store.state.counter--
    // }
    // or commit mutations to the state
    // increment() {
    //   this.$store.commit("increment")
    // },
    // decrement() {
    //   this.$store.commit("decrement")
    // }
    // or map the mutations like you would getters
    // ...mapMutations({
    //   increment: "increment",
    //   decrement: "decrement"
    // })
    // or follow best practices and use actions
    // this takes the actions and lets you assign them to new local methods
    // make sure you have the latest Babel preset to make this work
    ...mapActions({
      increment: "asyncIncIt",
      decrement: "asyncDecIt"
    })
    // it isn't necessary, but you could call actions within methods as well
    // increment(incrementor) {
    //   this.$store.dispatch("increment", incrementor)
    // },
    // decrement(decrementor) {
    //   this.$store.dispatch("decrement", decrementor)
    // }
  }
}
</script>