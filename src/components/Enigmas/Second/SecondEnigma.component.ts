import Vue from "vue";
import Component from "vue-class-component";
import { AnswerFormComponent } from "./../../shared/AnswerForm/AnswerForm.component";
import { EnigmaContainerComponent } from "./../../shared/EnigmaContainer/EnigmaContainer.component";
import Template from "./SecondEnigma.template.vue";

@Component({
  mixins: [Template],
  components: {
    EnigmaContainerComponent,
    AnswerFormComponent
  }
})
export class SecondEnigmaComponent extends Vue {
  private answer = "Margaret";
  public paused = false;

  public onWheelChange() {
    this.paused = !this.paused;
  }
}
