import Vue from "vue";
import Component from "vue-class-component";
import Template from "./Home.template.vue";

@Component({
  mixins: [Template]
})
export class HomeComponent extends Vue {
  public loading = true;

  public toggleLoader() {
    this.loading = false;
  }
}
