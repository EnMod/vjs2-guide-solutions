<template>
  <div class="alert" :class="status">
    <div class="center-block">
      {{ message }}
    </div>
  </div>
</template>
<script>
import { eventBus } from "../main"

export default {
  props: ["status", "message"],
  data() {
    return {}
  },
  created() {
    eventBus.$on("statusChange", data => {
      this.infoType = data.class
      this.instructions = data.message
    })
  }
}
</script>
<style scoped>

</style>