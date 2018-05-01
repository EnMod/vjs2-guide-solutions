import Portfolio from "./components/portfolio/Portfolio.vue"
import Stocks from "./components/stocks/Stocks.vue"
import Home from "./components/Home.vue"

export const routes = [
  {
    path: "",
    name: "home",
    components: {
      default: Home
    }
  },
  {
    path: "/portfolio",
    components: {
      default: Portfolio
    }
  },
  {
    path: "/stocks",
    components: {
      default: Stocks
    }
  },
  { path: "*", redirect: "/" }
]
