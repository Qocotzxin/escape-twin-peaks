import { FirstEnigmaComponent } from "@/components/FirstEnigma/FirstEnigma.component";
import { IntroComponent } from "@/components/Intro/Intro.component";
import { HomeComponent } from "@/components/Home/Home.component";
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
  },
  {
    path: "/enigma-1",
    name: "First",
    component: FirstEnigmaComponent
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
