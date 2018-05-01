<template>
  <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
          <li class="list-group-item" :key="index" v-for="index in servernum">
              Server #{{ index }}
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      servernum: 5
    }
  }
}
</script>
<style scoped>
div {
  background: green;
}
</style>
