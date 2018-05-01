export const ex4 = {
  computed: {
    ex3a() {
      return this.ex1
        .split("")
        .reverse()
        .join("")
    },
    ex3b() {
      return `${this.ex2} (Length: ${this.ex2.length})`
    }
  }
}
