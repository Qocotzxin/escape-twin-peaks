import { FirstEnigmaComponent } from "@/components/Enigmas/First/FirstEnigma.component";
import { SecondEnigmaComponent } from "@/components/Enigmas/Second/SecondEnigma.component";
import { ThirdEnigmaComponent } from "@/components/Enigmas/Third/ThirdEnigma.component";
import { HomeComponent } from "@/components/Home/Home.component";
import { IntroComponent } from "@/components/Intro/Intro.component";
import { NotFoundComponent } from "@/components/shared/NotFound/NotFound.component";
import { RouteConfig } from "vue-router";
import { isAllowed, setInitialPage } from "./guards";
export const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: HomeComponent,
    beforeEnter: (to, from, next) => setInitialPage(next)
  },
  {
    path: "/intro",
    name: "Intro",
    component: IntroComponent
  },
  {
    path: "/enigma-1",
    name: "Enigma-1",
    component: FirstEnigmaComponent
  },
  {
    path: "/enigma-2",
    name: "Enigma-2",
    component: SecondEnigmaComponent,
    beforeEnter: (to, from, next) => isAllowed(to, next)
  },
  {
    path: "/enigma-3",
    name: "Enigma-3",
    component: ThirdEnigmaComponent,
    beforeEnter: (to, from, next) => isAllowed(to, next)
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFoundComponent
  }
];
