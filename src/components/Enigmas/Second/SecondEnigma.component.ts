import Vue from "vue";
import Component from "vue-class-component";
import { AnswerFormComponent } from "./../../shared/AnswerForm/AnswerForm.component";
import { EnigmaContainerComponent } from "./../../shared/EnigmaContainer/EnigmaContainer.component";
import Template from "./SecondEnigma.template.vue";
import { HammerEvent } from "@/model/hammer.interface";

@Component({
  mixins: [Template],
  components: {
    EnigmaContainerComponent,
    AnswerFormComponent
  }
})
export class SecondEnigmaComponent extends Vue {
  private answer = "Margaret";
  private rotation = { transform: "rotate(0)" };

  public onRotate(e: HammerEvent) {
    this.rotation = {
      transform: `rotate(${e.rotation}deg)`
    };
  }
}
