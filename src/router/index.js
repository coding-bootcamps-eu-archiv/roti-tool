import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Index.vue";
import Team from "../views/Team.vue";
import New from "../views/NewRoti.vue";
<<<<<<< HEAD
import Rotis from "../views/RotiTable.vue";
=======
import Success from "../views/Success.vue";
>>>>>>> development

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    // import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/new",
    name: "New",
    component: New,
  },
  {
<<<<<<< HEAD
    path: "/table",
    name: "RotiList",
    component: Rotis,
=======
    path: "/success",
    name: "Success",
    component: Success,
>>>>>>> development
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
