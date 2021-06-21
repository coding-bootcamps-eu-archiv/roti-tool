import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../views/Index.vue";
import Team from "../views/Team.vue";
import NewRoti from "../views/NewRoti.vue";

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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
