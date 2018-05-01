<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 class="text-center">The Super Quiz</h1>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <transition name="spin" mode="out-in">
              <!-- when the answer is confirmed, go to the next question -->
                    <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'"></component>
            </transition>

            </div>
        </div>
    </div>
</template>

<script>
import Question from "./components/Question.vue"
import Answer from "./components/Answer.vue"

export default {
  data() {
    return {
      mode: "app-question"
    }
  },
  methods: {
    // when the component sends up an answer,
    // change the current component to the answer screen
    // or keep it on the question screen and alert the user to try again
    answered(isCorrect) {
      if (isCorrect) {
        this.mode = "app-answer"
      } else {
        this.mode = "app-question"
        alert("Wrong, try again!")
      }
    }
  },
  components: {
    appQuestion: Question,
    appAnswer: Answer
  }
}
</script>

<style scoped>
.spin-enter-active {
  animation: spin-in 0.25s forwards;
}
.spin-leave-active {
  animation: spin-out 0.25s forwards;
}

@keyframes spin-out {
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(90deg);
  }
}
@keyframes spin-in {
  /* from flat to camera */
  from {
    transform: rotateY(90deg);
  }

  /* to normal rot and display */
  to {
    transform: rotateY(0deg);
  }
}
</style>
