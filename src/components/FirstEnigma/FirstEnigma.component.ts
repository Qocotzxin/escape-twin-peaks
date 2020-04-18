import Vue from "vue";
import Component from "vue-class-component";
import Template from "./FirstEnigma.template.vue";
import { EnigmaContainerComponent } from "../shared/EnigmaContainer/EnigmaContainer.component";
import draggable from "vuedraggable";

@Component({
  mixins: [Template],
  components: {
    EnigmaContainerComponent,
    draggable
  }
})
export class FirstEnigmaComponent extends Vue {
  public input = "";
  public detail = false;
  private rules = [
    (v: string) => v.length <= 4 || "Recordá que la clave tiene 4 dígitos"
  ];

  public onClick() {
    this.detail = true;
  }

  public onAnswer() {
    if (+this.input === 1954) {
      this.$router.push({ name: "Home" });
    } else {
      console.log("asd");
    }
  }
}
