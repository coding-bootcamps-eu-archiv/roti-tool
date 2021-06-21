import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../views/Index.vue";
import Team from "../views/Team.vue";
import New from "../views/New.vue";

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
    component: New,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
