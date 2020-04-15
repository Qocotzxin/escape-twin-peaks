import Vue from "vue";
import Component from "vue-class-component";
import Template from "./App.template.vue";

@Component({
  mixins: [Template]
})
export class AppComponent extends Vue {}
