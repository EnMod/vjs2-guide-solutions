<template>
    <div>
      <h3>Some User Details</h3>
    {{name}}
    <!-- old n busted -->
      <!-- <router-link :to="`/user/${name}/edit`" tag="button">Edit</router-link> -->
    <!-- new hotness -->
      <router-link :to="{name: 'UserEdit', params: {id: $route.params.id}, query:{ locale: 'en', a: 10} }" tag="button">Edit</router-link>
    </div>
</template>
<script>
export default {
  // computed: {
  //   name() {
  //     return this.$route.params.id
  //   }
  // }
}
</script>