<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="loadBlue" class="btn btn-primary">Load Blue Template</button>
                <button @click="loadGreen" class="btn btn-success">Load Green Template</button>
                <button @click="loadRed" class="btn btn-danger">Load Red Template</button>
                <hr>
                <component :is="selectedComponent">
                    <p>{{ templat }}</p>
                </component>
                    
                <!-- <app-blue><p>{{ templat }}</p></app-blue>
                <app-green><p>{{ templat }}</p></app-green>
                <app-red><p>{{ templat }}</p></app-red> -->

            </div>
        </div>
    </div>
</template>

<script>
import Blue from "./components/Blue.vue"
import Green from "./components/Green.vue"
import Red from "./components/Red.vue"

export default {
  data() {
    return {
      selectedComponent: "",
      templat: "ayyyy"
    }
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  },
  methods: {
    loadBlue() {
      this.selectedComponent = "app-blue"
    },
    loadGreen() {
      this.selectedComponent = "app-green"
    },
    loadRed() {
      this.selectedComponent = "app-red"
    }
  }
}
</script>

<style>

</style>
