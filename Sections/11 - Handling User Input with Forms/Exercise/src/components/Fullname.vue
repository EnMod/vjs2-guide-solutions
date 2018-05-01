<template>
  <div>
    <div>
      <label for="firstName">First Name</label>
      <input 
        name="firstName" 
        type="text" 
        v-model="firstname">
    </div>
    <div>
      <label for="lastName">Last Name</label>
      <input 
        name="lastName" 
        type="text" 
        v-model="lastname">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: ""
    }
  },
  computed: {
    fullname() {
      return `${this.firstname} ${this.lastname}`
    }
  },
  // every time the full name changes,
  // send it up to the app
  watch: {
    fullname() {
      this.$emit("nameChanged", this.fullname)
    }
  }
}
</script>
<style scoped>

</style>