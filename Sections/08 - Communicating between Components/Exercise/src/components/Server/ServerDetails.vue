<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!serverDetails">Select a server</p>
        <div v-else>
          <h2>Name: {{ serverDetails.name }}</h2>
          <h2>Status: {{ serverDetails.status }}</h2>
          <button @click="normalizeStatus">QUICK MAKE IT NORMAL</button>
        </div>
    </div>

</template>

<script>
import { eventBus } from "../../main"

export default {
  data() {
    return {
      // id: 0,
      // name: "",
      // status: ""

      // instead, since the server object has all that,
      // just make a single server here
      serverDetails: null
    }
  },
  methods: {
    // sends out a signal to serverDetails.vue
    // also normalizes this status
    normalizeStatus() {
      this.serverDetails.status = "Normal"
      eventBus.$emit("normalizeStatus", {
        id: this.serverDetails.id,
        message: "Normal"
      })
    }
  },
  // when more detail is requested,
  // update the id/name/status
  created() {
    eventBus.$on("moreDetail", serverDetails => {
      this.serverDetails = serverDetails
    })
  }
}
</script>

<style>

</style>
