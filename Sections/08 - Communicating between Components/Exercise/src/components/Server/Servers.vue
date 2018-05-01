<template>
    <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
        <!-- use more logic treating EACH ITEM as a component
        rather than the list as a component 
        then you can just make a list featuring item data you want-->
        <server-listing
          v-for="server in servers"
          :key="server.id" 
          :server="server"
        />
      </ul>
    </div>
</template>

<script>
import ServerListing from "./ServerListing.vue"
// goals:
// - create an array of server objects
// - have each one's status be changed by
// a function executed by ServerDetails.vue
// - this means passing that data to a new ServerList.vue component
export default {
  components: {
    ServerListing
  },
  data() {
    return {
      servers: [
        {
          id: 1,
          name: "Alpha",
          status: "Normal"
        },
        {
          id: 2,
          name: "Beta",
          status: "Unknown"
        },
        {
          id: 3,
          name: "Gamma",
          status: "ON FIRE"
        },
        {
          id: 4,
          name: "Delta",
          status: "OH NO UNPLUG IT"
        },
        {
          id: 5,
          name: "Epsilon",
          status: "Normal"
        }
      ]
    }
  }
}
</script>

<style>

</style>
