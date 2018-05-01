<template>
<div>
  <p>Counter is: {{ counter }}</p>
  <p>{{ clickCount }}</p>
</div>
</template>

<script>
import { mapGetters } from "Vuex"

export default {
  // old n busted
  // props: ['counter']

  // new hotness
  // computed: {
  //   counter() {
  //     return this.$store.getters.doubleCounter
  //   },
  //   clickCount() {
  //     return this.$store.getters.stringCounter
  //   }
  // }

  // or use mapGetters
  computed: {
    ...mapGetters({
      counter: "doubleCounter",
      clickCount: "stringCounter"
    })
  }
}
</script>