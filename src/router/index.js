import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../views/Index.vue";
import Team from "../views/Team.vue";
import NewRoti from "../views/NewRoti.vue";
import Success from "../views/Success.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/new",
    name: "New",
    component: NewRoti,
  },
  {
    path: "/success",
    name: "Success",
    component: Success,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
