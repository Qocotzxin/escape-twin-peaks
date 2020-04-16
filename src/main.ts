import Vue from "vue";
import { AppComponent } from "./App.component";
import { VueHammer } from "vue2-hammer";
import router from "./router";
import "./styles/index.scss";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import vuetify from "./plugins/vuetify";

Vue.use(VueHammer);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(AppComponent)
}).$mount("#app");
