import Vue from "vue";
import Component from "vue-class-component";
import Template from "./Intro.template.vue";

@Component({
  mixins: [Template]
})
export class IntroComponent extends Vue {
  public step = 0;

  public onStepChange() {
    this.step++;

    if (this.step === 3) {
      this.$router.push({ name: "Enigma-1" });
    }
  }

  public onLastClick() {
    this.$router.push({ name: "Home" });
  }
}
