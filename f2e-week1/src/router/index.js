import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    props: true,
    component: Home,
    children: [
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
    ],
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
  {
    path: "/content/:city?/:name?",
    name: "Content",
    props: true,
    component: () => import("../views/Content.vue"),
  },
  {
    path: "/result/:city/:type?",
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
