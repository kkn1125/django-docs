/*global process*/
/*eslint no-undef: "error"*/

import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import NotFound from "@/components/NotFounds.vue";

const root = process.env.NODE_ENV === "production"
? "/django-docs/" // note the trailing slash
: "/";

const routes = [
  {
    path: root+"",
    name: "home",
    component: Home,
  },
  {
    path: root+"about",
    name: "about",
    component: About,
  },
  {
    path: root+"404",
    name: "notFound",
    component: NotFound,
  },
  {
    path: root+":pathMatch(.*)*",
    redirect: root+"/404",
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});