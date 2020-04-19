import Vue from "vue";
import Component from "vue-class-component";
import { EnigmaContainerComponent } from "../../shared/EnigmaContainer/EnigmaContainer.component";
import { AnswerFormComponent } from "./../../shared/AnswerForm/AnswerForm.component";
import Template from "./FirstEnigma.template.vue";

@Component({
  mixins: [Template],
  components: {
    EnigmaContainerComponent,
    AnswerFormComponent
  }
})
export class FirstEnigmaComponent extends Vue {
  private detail = false;
  private answer = "1954";
  private rules: Array<(v: string) => string | boolean> = [
    (v: string) =>
      (v.length <= 4 && !isNaN(+v)) || "Recordá que la clave tiene 4 dígitos"
  ];

  public onClick() {
    this.detail = true;
  }
}
