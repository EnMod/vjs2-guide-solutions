import User from "./components/user/User.vue"
import UserStart from "./components/user/UserStart.vue"
import UserEdit from "./components/user/UserEdit.vue"
import UserDetail from "./components/user/UserDetail.vue"
import Home from "./components/Home.vue"

export const routes = [
  {
    path: "/user",
    component: User,
    children: [
      {
        path: "",
        component: UserStart
        // if you want to set up components "included" in a base component as named router-views,
        // define them here in components
      },
      {
        path: ":id",
        component: UserDetail
      },
      {
        path: ":id/edit",
        component: UserEdit,
        name: "UserEdit"
      }
    ]
  },
  {
    path: "",
    component: Home
  }
]
