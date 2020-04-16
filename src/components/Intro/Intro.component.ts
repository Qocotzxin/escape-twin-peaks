import Vue from "vue";
import Component from "vue-class-component";
import Template from "./Intro.template.vue";

@Component({
  mixins: [Template]
})
export class IntroComponent extends Vue {
  public step = 0;
  public highlight = false;

  public onStepChange() {
    this.step++;
    this.highlight = false;
  }

  public onLastClick() {
    this.$router.push({ name: "Home" });
  }
}
