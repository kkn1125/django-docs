import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import NotFound from "@/components/NotFounds.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/404",
    name: "notFound",
    component: NotFound,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: "/404"
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
