new Vue({
    el: '#exercise',
    data: {
        value: 0,
        timeLimit: 5000
    },
    computed: {
        // print done as result if user reaches/passes 37
        result() {
            return this.value >= 37 ? 'done' : 'not there yet'
        }
    },
    watch: {
        // reset the value after the set time limit
        result() {
            const vm = this
            setTimeout(() => {
                vm.value = 0
            }, this.timeLimit);
        }
    }
});