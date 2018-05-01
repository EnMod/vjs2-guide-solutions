<template>
    <div class="container">
        <form v-if="!formSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 x -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <app-fullname @nameChanged="formData.fullname = $event" />
                    <div>
                      <label for="email">Email</label>
                      <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        v-model="formData.email">
                    </div>

                    <div>
                      <label for="password">Password</label>
                      <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        v-model="formData.password">
                    </div>
                    <div>
                      <label for="dataStorePref">Store Data?</label>
                      <input 
                        type="checkbox" 
                        v-model="formData.dataStorePref">
                    </div>
                    <button type="submit" @click.prevent="submitForm">Submit</button>
                    <!-- Exercise 2 x -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div v-if="formSubmitted" class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ formData.fullname }}</p>
                        <p>Mail: {{ formData.email }}</p>
                        <p>Password: {{ formData.password }}</p>
                        <p>Store in Database?: {{ formData.dataStorePref ? 'Yes' : 'No' }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Fullname from "./components/Fullname.vue"

export default {
  components: {
    "app-fullname": Fullname
  },
  data() {
    return {
      formData: {
        fullname: "",
        email: "",
        password: "",
        dataStorePref: true
      },
      formSubmitted: false
    }
  },
  methods: {
    submitForm() {
      this.formSubmitted = true
      console.log("SUUUBMIT!")
    }
  }
}
</script>

<style>

</style>
