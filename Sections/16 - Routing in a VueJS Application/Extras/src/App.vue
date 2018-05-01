<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <hr>
                  <router-view name="header-top"></router-view>
                <transition mode="out-in" name="slide">
                  <router-view></router-view>
                </transition>
                  <router-view name="header-bottom"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./components/Header.vue"
export default {
  components: {
    appHeader: Header
  }
}
</script>

<style>
.slide-enter-active {
  animation: slide-in 0.5s ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 0.5s ease-out forwards;
  position: absolute;
}

.slide-move {
  /* applies a transition to Vue's native moves */
  transition: transform 0.5s;
}

@keyframes slide-in {
  from {
    transform: translateX(200px);
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
    width: 0;
    opacity: 1;
  }
  to {
    transform: translateX(200px);
    width: 1000px;
    opacity: 0;
  }
}
</style>
