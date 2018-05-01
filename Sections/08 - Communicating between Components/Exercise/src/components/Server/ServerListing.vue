<template>
  <li
      class="list-group-item"
      @click="moreDetail"
      >
      Server: {{ server.name }} <br>
      Status: {{ server.status }}
  </li>

</template>
<script>
import { eventBus } from "../../main"

// make it so when the items are clicked,
// load server details in ServerDetails.vue
export default {
  props: ["server"],
  methods: {
    moreDetail() {
      // the reason to pass the server directly,
      // is to preserve the reference made here
      // so that no matter where it's passed,
      // its data can be modded

      // THIS WAS THE KEY THING TO KEEP IN MIND
      // IF YOU WANNA REACTIVELY CHANGE AN OBJECT,
      // MAKE SURE IT AND ONLY IT IS PASSED

      // NO REASSIGNS, NO COPIES
      eventBus.$emit("moreDetail", this.server)
    }
  },
  created() {
    eventBus.$on("normalizeStatus", normalizer => {
      if (this.id == normalizer.id) {
        this.status = normalizer.message
      }
    })
  }
}
</script>