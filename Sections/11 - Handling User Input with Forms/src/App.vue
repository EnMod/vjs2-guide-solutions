<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control" 
                                v-model.trim="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.trim="userData.password">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model.number="userData.age">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!
                      as with other form controls, use v-model to bind the data.  All {{ test }} 
                      would do is render test to the DOM -->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control" v-model="message"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="emailOptions"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"
                                    v-model="emailOptions"> Send Infomail
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="gender"> Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model="currentPriority">
                        <option :key="i" v-for="(priority, i) in priorities">
                          {{ priority }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- switch component to switch between true or false on a data

                      v-model passes the value into the child, named as "value"
                      like setting up a two-way bind throough to the child
                    -->
                    <app-switch v-model="dataBool"></app-switch>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- if a form has a button, it's a submit button
                    so `.prevent` it if you're tryna handle the form with Vue -->
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitForm">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <!-- only show this on submit -->
        <div v-if="formSubmitted" class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <div class="panel panel-default">
                  <div class="panel-heading">
                      <h4>Your Data</h4>
                      <p @click="formSubmitted = false">Close</p>
                  </div>
                  <div class="panel-body">
                      <p>Mail: {{ userData.email }}</p>
                      <p>Password: {{ userData.password }} </p>
                      <p>Age: {{ userData.age }}</p>
                      <!-- Want to keep the styling of the string? 
                      Notify the DOM that the incoming text has been preformatted
                      by styling the element -->
                      <p style="white-space:pre;">Message: {{ message }} </p>
                      <p><strong>Send Mail?</strong></p>
                      <ul>
                          <li v-for="(option, i) in emailOptions" :key="i">
                            {{ option }}
                          </li>
                      </ul>
                      <p>Gender: {{ gender }}</p>
                      <p>Priority: {{ currentPriority }} </p>
                      <p>Switched: {{ dataBool }}</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
import Switch from "./components/Switch.vue"

export default {
  components: {
    "app-switch": Switch
  },
  data() {
    return {
      // group these values in a single object because they are related
      userData: {
        email: "",
        password: "",
        age: ""
      },
      priorities: ["low", "mid", "high"],
      emailOptions: [],
      message: "Default message tho",
      gender: "",
      currentPriority: "",
      dataBool: false,
      formSubmitted: false
    }
  },
  methods: {
    submitForm() {
      this.formSubmitted = true
      console.log("SUUUUBMIT!")
    }
  }
}
</script>

<style>

</style>
