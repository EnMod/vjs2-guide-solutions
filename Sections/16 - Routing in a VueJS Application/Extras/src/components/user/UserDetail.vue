<template>
    <div>
        <button @click="canLeave = true">Boi</button>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <router-link tag="button" :to="link" class="btn btn-primary">Edit User</router-link>
    </div>
</template>
<script>
export default {
  data() {
    return {
      canLeave: false,
      message: "ayy lmao",
      link: {
        name: "userEdit",
        params: { id: this.$route.params.id },
        query: {
          locale: "en",
          q: 100
        }
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log(this.message)
    if (this.canLeave) next()
    else confirm("Are you sure?") ? next() : next(false)
  }
}
</script>
