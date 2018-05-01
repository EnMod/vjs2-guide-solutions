<template>
<div>
    <h1>The User Page</h1>
    <h3>User: {{ item }}</h3>
    <button @click="sendMeHome">go home</button>
    <router-view></router-view>
</div>

</template>
<script>
export default {
  data() {
    return {
      // id: this.$route.params.id
    }
  },
  methods: {
    sendMeHome() {
      this.$router.push("/")
      // you can push route objects here too
    }
  },
  computed: {
    item() {
      return this.$route.params.item
    }
  }
}
</script>
