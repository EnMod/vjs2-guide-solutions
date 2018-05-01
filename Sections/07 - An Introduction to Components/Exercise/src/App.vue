<template>
    <div class="container">
        <app-header/>
        <hr>
        <servers/>
        <hr>
        <manager/>
    </div>
</template>

<script>
import Header from "./components/Header.vue"
import Servers from "./components/Servers.vue"
import Manager from "./components/Manager.vue"

export default {
  components: {
    "app-header": Header,
    servers: Servers,
    manager: Manager
  }
}
</script>


<style>

</style>
