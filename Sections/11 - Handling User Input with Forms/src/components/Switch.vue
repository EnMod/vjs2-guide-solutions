<template>
  <div>
    <div
        id="on"
        @click="switched(true)"
        :class="{active: value}">On</div>
    <div
        id="off"
        @click="switched(false)"
        :class="{active: !value}">Off</div>
  </div>
</template>

<script>
export default {
  // instead of setting up its own values,
  // have it work with what's given to it and
  // tell the parent what to do
  props: ["value"],
  methods: {
    // you don't have to listen for the "input" event
    // on the outside of the child,
    // that's a native event, so if you emit it,
    // it works with v-model naturally in the parent
    switched(datBool) {
      this.$emit("input", datBool)
    }
  }
}
</script>

<style scoped>
#on,
#off {
  width: 40px;
  height: 20px;
  background-color: lightgray;
  padding: 2px;
  display: inline-block;
  margin: 10px -2px;
  box-sizing: content-box;
  cursor: pointer;
  text-align: center;
}

#on:hover,
#on.active {
  background-color: lightgreen;
}

#off:hover,
#off.active {
  background-color: lightcoral;
}
</style>