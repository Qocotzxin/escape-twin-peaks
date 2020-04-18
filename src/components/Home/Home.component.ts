import Vue from "vue";
import Component from "vue-class-component";
import Template from "./Home.template.vue";
import { EventBus } from "@/event-bus";

@Component({
  mixins: [Template]
})
export class HomeComponent extends Vue {
  public created() {
    EventBus.$emit("loadOn");
  }

  public toggleLoader() {
    EventBus.$emit("loadOff");
  }

  public onClick() {
    this.$router.push({ name: "Intro" });
  }
}
