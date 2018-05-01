<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- apply filters to data with {{ data | filter }} -->
                <p>{{ text | toCaps }}</p>
                <!-- entering values in this input will update the  -->
                <input type="text" v-model="searchTerm">
                <ul>
                  <!--  -->
                  <li v-for="boi in searchResults" :key="boi">{{ boi }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      text: "ayy lmao",
      bois: ["gro", "bam", "pow"],
      searchTerm: ""
    }
  },
  filters: {
    // `value` here is the data the filter is applied to
    toCaps(value) {
      return value.toUpperCase()
    }
  },
  computed: {
    // instead of running a filter on rerender all the time in the for loop,
    // just make a computed property based on the searchTerm
    searchResults() {
      // return the filtered array of bois based on the search term
      return this.bois.filter(element => {
        // go through the bois
        // does the search term match the current boi?
        // if so, keep it in the results
        return element.match(this.searchTerm)
      })
    }
  }
}
</script>

<style>

</style>
