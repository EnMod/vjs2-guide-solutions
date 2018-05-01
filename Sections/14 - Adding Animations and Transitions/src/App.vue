<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button @click="show = !show" class="btn btn-primary">ALERT</button>
                <transition name="fade" mode="out-in">
                  <div v-if="show" class="alert alert-info">HEY</div>
                  <div v-else class="alert alert-warning">UH OH</div>
                </transition>
                <hr>
                <button @click="load = !load" class="btn btn-primary">Load / Remove element</button>
                <br><br>
                <!-- throwing event listeners on transitions works for
                native JS transition event hooks -->
                <transition>
                  <div v-if="load" style="width: 100px; height:100px; background-color:green"></div>
                </transition>
                <hr>
                <button @click="curComp == 'dyna1' ? curComp = 'dyna2' : curComp = 'dyna1'">Switch!</button>
                <component :is="curComp"></component>
                <hr>
                <button @click="addItem">
                  Add
                </button>
                <p>{{bois}}</p>
                <ul class="list-group">
                  <transition-group name="slide">
                    <li style="cursor: pointer;" class="list-group-item" @click="removeItem(i)" v-for="(boi, i) in bois" :key="boi">{{ boi }}</li>
                  </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Dyna1 from "./components/Dyna1.vue"
import Dyna2 from "./components/Dyna2.vue"
export default {
  data() {
    return {
      show: false,
      load: false,
      curComp: "dyna1",
      bois: [1, 2, 3, 4, 5]
    }
  },
  components: {
    Dyna1,
    Dyna2
  },
  methods: {
    randPos() {
      return Math.floor(Math.random() * this.bois.length)
    },
    addItem() {
      // set a random position to insert the item at
      // splice's third arg lets you define something to be added at the specified position
      // the 0 indicates there will be no removal in this splice
      this.bois.splice(this.randPos(), 0, this.bois.length + 1)
    },
    removeItem(index) {
      this.bois.splice(index, 1)
    }
  }
}
</script>

<style scoped>
/* on DOM enter */
.fade-enter {
  opacity: 0;
}

/* during DOM entrance */
.fade-enter-active {
  transition: opacity 0.5s;
}

/* same for leave */
.fade-leave {
  /* is opacity: 1 by default because
      the element is currently visible */
}

.fade-leave-active {
  transition: opacity 0.5s;
  /* define opacity: 0 here because it's still 1 */
  opacity: 0;
}

/* Webanimations alternative */

/* on DOM enter */
.slide-enter {
  /* don't define animations here, same reason for transitions */
}

/* during DOM entrance */
.slide-enter-active {
  animation: slide-in 0.5s ease-out forwards;
}

/* same for leave */
.slide-leave {
  /* see transitions */
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
