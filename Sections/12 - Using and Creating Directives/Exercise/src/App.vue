<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Directives Exercise</h1>
				<!-- Exercise -->
				<!-- Build a Custom Directive which works like v-on (Listen for Events) -->
				<!-- YOUR BINDING VALUES ARE JS EXPRESSIONS SO IF YOU'RE PASSING IN STRINGS,
				PASS IN STRINGS -->
				<p v-colorChangeOn:click="`black`">When this paragraph is clicked, it should go black</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  directives: {
    colorChangeOn: {
      bind(el, binding) {
        function bgColorChange() {
          console.log(el.style.backgroundColor)
          el.style.backgroundColor = binding.value
        }
        el.addEventListener(binding.arg, bgColorChange)
      }
    }
  }
}
</script>

<style>

</style>
