<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
                <p v-text="`A built in directive called 'v-text' adds text to the 'textContent' of an element, but as you can see in the code it's extremely limited`"></p>
                <p v-html="`Similarly, <strong>v-html</strong> changes an element's innerHTML`"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-colorChange.page="`gold`">The custom `v-colorChange` directive in action</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>

</style>
