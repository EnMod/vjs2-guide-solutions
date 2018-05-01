<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                  <label >Username</label>
                  <input class="form-control" type="text" v-model="user.username">
                </div>
                <div class="form-group">
                  <label >Password</label>
                  <input class="form-control" type="text" v-model="user.password">
                </div>
                <div class="form-group">
                  <label >Email</label>
                  <input class="form-control" type="text" v-model="user.email">
                </div>
                <button @click="sendRequest" class="btn btn-primary">Submit</button>
                {{ statusText }}
                <hr>
                <button @click="getRequest" class="btn btn-primary">Grab</button>
                <ul class="list-group">
                  <li class="list-group-item" v-for="user in users" :key="user">
                    U: {{ user.username }} <br>
                    P: {{ user.password }} <br>
                    E: {{ user.email }} <br>
                  </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
        email: ""
      },
      statusText: "",
      users: []
    }
  },
  methods: {
    sendRequest() {
      this.$http
        .post("https://v2tcg-sec15.firebaseio.com/data.json", this.user)
        .then(response => {
          this.statusText = response.statusText
        })
    },
    getRequest() {
      this.$http
        .get("https://v2tcg-sec15.firebaseio.com/data.json")
        .then(response => {
          return response.json()
        })
        .then(data => {
          // declare a new array every time,
          // so you don't keep pushing into the same array forever
          const usersFound = []
          for (let user in data) {
            usersFound.push(data[user])
          }
          this.users = usersFound
        })
    }
  }
}
</script>

<style>

</style>
