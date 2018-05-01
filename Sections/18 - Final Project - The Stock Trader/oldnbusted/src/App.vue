<template lang="pug">
  .container
    app-navbar
    transition(mode="out-in" name="slide")
      router-view
</template>

<script>
import Navbar from "./components/Navbar.vue"

export default {
  components: {
    "app-navbar": Navbar
  }
}
</script>
<style lang="stylus" scoped>
.slide-enter-active {
  animation: slide-in 0.15s ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 0.15s ease-out forwards;
  position: absolute;
}

.slide-move {
  transition: transform 0.15s;
}

@keyframes slide-in {
  from {
    transform: translateX(-200px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0);
    opacity: 1;
  }

  to {
    transform: translateX(-200px);
    opacity: 0;
  }
}
</style>
