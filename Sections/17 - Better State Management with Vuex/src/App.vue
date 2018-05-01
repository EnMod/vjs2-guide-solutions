<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <!-- old n busted -->
                <!-- <app-result :counter="counter"></app-result>
                <hr>
                <app-counter @updated="counter += $event"></app-counter> -->

                <!-- new hotness -->
                <app-result></app-result>
                <hr>
                <app-counter></app-counter>
                <hr>
                <input type="text" v-model="value">
                {{ value }}
            </div>
        </div>
    </div>
</template>

<script>
import Counter from "./components/Counter.vue"
import Result from "./components/Result.vue"

export default {
  // old n busted
  // data() {
  //     return {
  //         counter: 0
  //     }
  // },
  components: {
    appCounter: Counter,
    appResult: Result
  },
  computed: {
    value: {
      get() {
        return this.$store.getters.value
      },
      set(value) {
        this.$store.dispatch("updateVal", value)
      }
    }
  }
}
</script>

