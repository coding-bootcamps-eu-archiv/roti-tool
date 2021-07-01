import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Index.vue";
import Team from "../views/Team.vue";
import New from "../views/NewRoti.vue";
import Success from "../views/Success.vue";
import Impressum from "../views/Impressum.vue";
import Datenschutz from "../views/Datenschutz.vue";

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
    path: "/success",
    name: "Success",
    component: Success,
  },
  {
    path: "/impressum",
    name: "Impressum",
    component: Impressum,
  },
  {
    path: "/datenschutz",
    name: "Datenschutz",
    component: Datenschutz,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
