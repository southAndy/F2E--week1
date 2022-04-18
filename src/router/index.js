import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    props: true,
    component: Home,
  },
  {
    path: "/scenicSpot",
    name: "ScenicSpot",
    component: () => import("../views/Festival.vue"),
  },
  {
    path: "/activities",
    name: "Activity",
    component: () => import("../views/Activities.vue"),
  },
  {
    path: "/restaurant",
    name: "Restaurant",
    component: () => import("../views/Restaurant.vue"),
  },
  {
    path: "/content/:city?/:name?/:id?",
    // path: "/content/:city?/:name?/:id?",
    name: "Content",
    props: true,
    component: () => import("../views/Content.vue"),
  },
  {
    path: "/result/:id?",
    name: "Result",
    props: true,
    component: () => import("../views/Result.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
