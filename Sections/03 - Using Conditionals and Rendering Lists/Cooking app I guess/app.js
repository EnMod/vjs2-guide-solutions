new Vue({
  el: "#app",
  data: {
    ingredients: ["meat", "fruit", "cookies"],
    // only single-level curlies, thus
    // the object list needs to be wrapped in []
    people: [
      { name: "Jan", age: 28, color: "indigo" },
      { name: "Jake", age: 32, color: "silver" }
    ]
  }
});
