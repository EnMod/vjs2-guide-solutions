<template>
  <div>
    <slot name="title"></slot>
    <span class="subtitle"><slot name="subtitle">Sub here</slot></span>
    <slot name="quote"></slot>    
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
div {
  border: 1px solid black;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}
</style>