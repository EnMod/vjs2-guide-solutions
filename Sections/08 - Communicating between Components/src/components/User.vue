<template>
	<div class="component">
		<h1>The User Component for {{ username }}, {{ userage }}</h1>
		<p>I'm an awesome User!</p>
		<button @click="changeName">Change user details</button>
		<hr>
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<app-user-detail 
					:name="myname" 
					:age="userage"
					@roasted="username = $event"
					></app-user-detail>
			</div>
			<div class="col-xs-12 col-sm-6">
				<app-user-edit 
					:name="myname"
					:age="userage" 
					:completeLevel="alerter"
					@ageChanged="userage = $event"></app-user-edit>
			</div>
		</div>
	</div>
</template>

<script>
import UserDetail from "./UserDetail.vue"
import UserEdit from "./UserEdit.vue"

import { eventBus } from "../main"

export default {
  data() {
    return {
      username: "EnMod",
      userage: 28,
      myname: "Noellllll"
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  methods: {
    changeName() {
      this.myname =
        this.myname == "something elssssssse"
          ? "a thing"
          : "something elssssssse"
    },
    alerter() {
      alert("Yipee! Youuuu ded et")
    }
  },
  created() {
    eventBus.$on("ageChanged", age => {
      this.userage = age
    })
  }
}
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
