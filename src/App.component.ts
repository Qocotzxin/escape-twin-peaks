import Vue from "vue";
import Component from "vue-class-component";
import Template from "./App.template.vue";
import { EventBus } from "./event-bus";

@Component({
  mixins: [Template]
})
export class AppComponent extends Vue {
  public loading = false;

  public mounted() {
    EventBus.$on("loadOn", () => {
      this.loading = true;
    });

    EventBus.$on("loadOff", () => {
      this.loading = false;
    });
  }
}
