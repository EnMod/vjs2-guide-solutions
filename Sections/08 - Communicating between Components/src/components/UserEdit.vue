<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <button @click="editAge">Click to edit age</button>
        <button @click="completeLevel">Misshaw Cahmpleet!</button>
    </div>
</template>

<script>
import { eventBus } from "../main"

export default {
  props: {
    completeLevel: Function,
    name: String,
    age: Number
  },
  methods: {
    editAge() {
      this.age = 5
      // old n busted:
      // this.$emit("ageChanged", this.age)

      // new hotness:
      eventBus.$emit("ageChanged", this.age)
    }
  }
}
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
