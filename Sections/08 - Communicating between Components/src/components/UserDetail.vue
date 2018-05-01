<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <h2>Name: {{ name }}</h2>
		<h2>Age: {{ age }}</h2>
        <button @click="roast">{{ roastCommand }}</button>
    </div>
</template>

<script>
import { eventBus } from "../main"

export default {
  props: ["name", "age"],
  data() {
    return {
      roastCommand: "Roast me"
    }
  },
  methods: {
    roast() {
      this.name = "B O I"
      this.roastCommand = "☕"
      // old n busted:
      // this.$emit("roasted", this.name)

      // new hotness:
      // emits the same custom event but
      // does it from the eventBus instance
      // so EVERYONE can hear it
      eventBus.$emit("roasted", this.name)
    }
  },
  created() {
    eventBus.$on("ageChanged", age => {
      this.age = age
    })
  }
}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
