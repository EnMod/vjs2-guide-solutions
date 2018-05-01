<template lang="pug">

  div
    p Status: {{ status }}
    hr
    button(@click="calmDown") Change Status

</template>
<script>
export default {
  data() {
    return {
      status: "CRITICAL"
    }
  },
  methods: {
    calmDown() {
      this.status = "Fine! :)"
    }
  }
}
</script>