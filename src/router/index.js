import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../views/Index.vue";
import Team from "../views/Team.vue";

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
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
