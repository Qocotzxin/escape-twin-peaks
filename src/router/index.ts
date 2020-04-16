import { IntroComponent } from "@/components/Intro/Intro.component";
import { HomeComponent } from "@/containers/Home/Home.component";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: HomeComponent
  },
  {
    path: "/intro",
    name: "Intro",
    component: IntroComponent
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
