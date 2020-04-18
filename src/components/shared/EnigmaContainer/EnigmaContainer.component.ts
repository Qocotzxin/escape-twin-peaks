import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { BackgroundPatternComponent } from "../BackgroundPattern/BackgroundPattern.component";
import Template from "./EnigmaContainer.template.vue";

@Component({
  mixins: [Template],
  components: {
    BackgroundPatternComponent
  }
})
export class EnigmaContainerComponent extends Vue {
  @Prop({ default: "#212121" }) public color!: string;
}
