<template>
  <div>
    <h1>Quote Counter</h1>
    <div class="progress">
      <!-- if you're only worried about mathing something out for one single purpose,
      might as well inline it in the bind, like the :style here -->
      <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;" :style="{width: (quotesCur/quotesMax)*100 + '%'}">
        {{ quotesCur }} / {{ quotesMax }}
      </div>
    </div>
  </div>
</template>
<script>
import { eventBus } from "../main"

export default {
  props: ["quotesCur", "quotesMax"]
}
</script>
<style scoped>

</style>