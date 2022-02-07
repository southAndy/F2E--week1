import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/activities",
    name: "Activities",
    component: () => import("../views/Activities.vue"),
  },
  {
    path: "/festival",
    name: "Festival",
    component: () => import("../views/Festival.vue"),
  },
  {
    path: "/restaurant",
    name: "Restaurant",
    component: () => import("../views/Restaurant.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
