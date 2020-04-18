import Vue from "vue";
import Component from "vue-class-component";
import Template from "./BackgroundPattern.template.vue";

@Component({
  mixins: [Template]
})
export class BackgroundPatternComponent extends Vue {}
