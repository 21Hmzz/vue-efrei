import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("../views/Auth.vue"),
    },
  ],
});

export default router;
