<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <app-nav></app-nav>
                <h1>Routing</h1>
                <hr>
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from "./components/Nav.vue"
export default {
  components: {
    "app-nav": Nav
  }
}
</script>

<style>

</style>
