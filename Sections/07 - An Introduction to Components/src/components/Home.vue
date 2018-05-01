<template lang="pug">
  div
    //- Manager for servers, was once a server itself
    //- the v-for multiplies the component per data given as you know
    //- so you can use it with an arbitrary number if you want
    server-status(v-for="servers in 5")
</template>
<script>
// import the server-status component because we want it for this

import ServerStatus from "./ServerStatus.vue"

export default {
  components: {
    "server-status": ServerStatus
  }
}
</script>

