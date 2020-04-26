import Vue from "vue";
import Component from "vue-class-component";
import Template from "./NotFound.template.vue";

@Component({
  mixins: [Template]
})
export class NotFoundComponent extends Vue {
  public onClick() {
    this.$router.push({ name: "Home" });
  }
}
