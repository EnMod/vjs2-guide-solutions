new Vue({
	el: '#app',
	// the data property is NOT REACTIVE
	data: {
		count: 0,
		mouseX: 0,
		mouseY: 0,
		decrementor: 1,
		incrementor: 2,
		nickname: 'howdy'
	},
	// use computed props when
	// you want data props that are reactive

	// only recalcs when needed, to update from changed data
	// does not recalc on every event
	// **caches the results**
	computed: {
		result() {
			return this.count > 5 ? "It's bigger than 5." : "It's smaller than 5."
		}
	},
	// functions for tasks that need to update all the time
	// or otherwise very frequently
	// **does not cache the results**
	methods: {
		// functions to update the count
		// deprecated now that I see it can be done inline

		// decrement(step) {
		// 	this.count -= this.decrementor
		// },
		// increment(step) {
		// 	this.count += this.incrementor
		// },

		// pass in e, use page coords to 
		// update the values in the VueJS instance
		updateCoords(even) {
			this.mouseX = even.pageX
			this.mouseY = even.pageY
		},
		alertMe() {
			alert('YOU PRESSED UP WHY DID YOU PRESS UP WHEN HOME WORKS FINE')
		},
		// writes a result status according to the value of count
		resultStatus() {
			return this.count > 5 ? "It's bigger than 5." : "It's smaller than 5."
		}
	},
	// takes a data property and 
	// executes code on that value's changes
	// works well for needing to run async tasks
	// **does not cache the results**
	watch: {
		// first set your prop as a key, then logic as a value
		// **can't ES6 this because it's too confusing 
		// to list a prop up there as a function syntax down here**
		count() {

			// for some reason...VueJS's `this` doesn't extend into level 2+ watch functions
			// so we need to cache it before accessing it
			const vm = this

			// then, 2 seconds after each change, 
			// we'll reset it
			setTimeout(function () {
				vm.count = 0
			}, 2000)

			// not ideal for when the timeout in question needs to reset on change
			// purely for example
		}
	}
})