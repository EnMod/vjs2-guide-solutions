<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title text-center">{{ question }}</h3>
        </div>
        <div class="panel-body">
            <div class="col-xs-12 col-sm-6 text-center">
                <!-- when the button is clicked,
                 -->
                <button class="btn btn-primary btn-lg" style="margin: 10px" @click="onAnswer(btnData[0].correct)">{{ btnData[0].answer }}</button>
            </div>
            <div class="col-xs-12 col-sm-6 text-center">
                <button class="btn btn-primary btn-lg" style="margin: 10px" @click="onAnswer(btnData[1].correct)">{{ btnData[1].answer }}</button>
            </div>
            <div class="col-xs-12 col-sm-6 text-center">
                <button class="btn btn-primary btn-lg" style="margin: 10px" @click="onAnswer(btnData[2].correct)">{{ btnData[2].answer }}</button>
            </div>
            <div class="col-xs-12 col-sm-6 text-center">
                <button class="btn btn-primary btn-lg" style="margin: 10px" @click="onAnswer(btnData[3].correct)">{{ btnData[3].answer }}</button>
            </div>
        </div>
    </div>
</template>
<style>

</style>
<script>
// define modes
const MODE_ADDITION = 1
const MODE_SUBTRACTION = 2
export default {
  data() {
    return {
      question: "Oops, an error ocurred :/",
      // contains data for each button on whether it's correct or not,
      // as well as what answer to display
      btnData: [
        { correct: true, answer: 0 },
        { correct: false, answer: 0 },
        { correct: false, answer: 0 },
        { correct: false, answer: 0 }
      ]
    }
  },
  methods: {
    // generates a random question based on random numbers between 1 - 100
    generateQuestion() {
      // first, seed the numbers
      // also pick a random mode
      const firstNumber = this.generateRandomNumber(1, 100)
      const secondNumber = this.generateRandomNumber(1, 100)
      const modeNumber = this.generateRandomNumber(1, 2)

      // then, declare the correct answer var
      let correctAnswer = 0

      // depending on the mode picked,
      // the correct answer will be an addition or subtraction

      // then, the question is defined based on the firstNumber/secondNumber provided
      switch (modeNumber) {
        case MODE_ADDITION:
          correctAnswer = firstNumber + secondNumber
          this.question = `What's ${firstNumber} + ${secondNumber}?`
          break
        case MODE_SUBTRACTION:
          correctAnswer = firstNumber - secondNumber
          this.question = `What's ${firstNumber} - ${secondNumber}?`
          break
        default:
          correctAnswer = 0
          this.question = "Oops, an Error occurred :/"
      }
      // for each button,
      // generates a random number based on the correct answer,
      // and marks the button as an incorrect choice
      this.btnData[0].answer = this.generateRandomNumber(
        correctAnswer - 10,
        correctAnswer + 10,
        correctAnswer
      )
      this.btnData[0].correct = false
      this.btnData[1].answer = this.generateRandomNumber(
        correctAnswer - 10,
        correctAnswer + 10,
        correctAnswer
      )
      this.btnData[1].correct = false
      this.btnData[2].answer = this.generateRandomNumber(
        correctAnswer - 10,
        correctAnswer + 10,
        correctAnswer
      )
      this.btnData[2].correct = false
      this.btnData[3].answer = this.generateRandomNumber(
        correctAnswer - 10,
        correctAnswer + 10,
        correctAnswer
      )
      this.btnData[3].correct = false

      // then, picks a random button to be the correct one,
      // and assigns its value with the correct answer
      const correctButton = this.generateRandomNumber(0, 3)
      this.btnData[correctButton].correct = true
      this.btnData[correctButton].answer = correctAnswer
    },

    // generates a random number that isn't `except`
    generateRandomNumber(min, max, except) {
      const rndNumber = Math.round(Math.random() * (max - min)) + min
      console.log(min, max, rndNumber)
      // if the random number is the one you don't want it to be,
      // run this function again
      if (rndNumber == except) {
        return this.generateRandomNumber(min, max, except)
      }
      return rndNumber
    },
    // when the buttons are clicked,
    // tell the App that the question has been answered,
    // and send along whether the button was the correct one or not
    onAnswer(isCorrect) {
      this.$emit("answered", isCorrect)
    }
  },

  // generates a new question every time the component is created
  // as well as loaded into a <component> tag
  created() {
    this.generateQuestion()
  }
}
</script>
