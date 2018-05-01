<template>
  <div class="row">
    <server-list/>
    <server-details/>
  </div>
</template>
<script>
import ServerList from "./ServerList.vue"
import ServerDetails from "./ServerDetails.vue"

export default {
  components: {
    "server-list": ServerList,
    "server-details": ServerDetails
  }
}
</script>

