new Vue({
	el: '#app',
	data: {
		title: 'Hello World!',
		link: 'https://startpage.com',
		HTMLlink: '<a href="https://startpage.com"></a>'
	},
	methods: {
		sayHello: function () {
			// can't return data.title because VueJS isn't looking here,
			// it's pulling from the DOM

			// instead, use this.title
			// because VueJS otherwise uses proxies (?)
			return `Hello!`
		}
	}
})