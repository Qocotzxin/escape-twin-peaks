import { EventBus } from "@/event-bus";
import { Tile } from "@/model/dominoe.interface";
import { HammerEvent } from "@/model/hammer.interface";
import { storageService } from "@/services/storage.service";
import { TILES } from "@/utils/dominoe";
import { getEnigmaNumber, getLastEnigma } from "@/utils/helpers";
import Vue from "vue";
import Component from "vue-class-component";
import { EnigmaContainerComponent } from "../../shared/EnigmaContainer/EnigmaContainer.component";
import Template from "./ThirdEnigma.template.vue";

@Component({
  mixins: [Template],
  components: {
    EnigmaContainerComponent
  }
})
export class ThirdEnigmaComponent extends Vue {
  private dialog = false;
  private rightTiles = TILES.splice(0, Math.round(TILES.length / 2));
  private leftTiles = TILES;
  private resolved = false;

  /**
   * Calculates transform css property
   * based on element position.
   * @param event: HammerEvent
   * @param tile: Tile
   */
  public onPan(event: HammerEvent, tile: Tile) {
    let hoverStyle = {};
    const coords =
      event &&
      event.target &&
      event.target.offsetParent &&
      (event.target.offsetParent.getBoundingClientRect() as DOMRect);

    if (coords) {
      const pos = document.elementFromPoint(coords.x, coords.y);

      if (pos && pos.id && pos.id.includes("col-")) {
        hoverStyle = { "box-shadow": "0px 0px 13px firebrick" };
      }
    }

    tile.style = {
      ...hoverStyle,
      transform: `translate(${tile.x + event.deltaX}px, ${tile.y +
        event.deltaY}px)`
    };
  }

  /**
   * Set element position when drag/pan finishes.
   * It sets element to original positions if it
   * is dragged/panned outside viewport.
   * @param event: HammerEvent
   * @param tile: Tile
   */
  public onPanEnd(event: HammerEvent, tile: Tile) {
    const coords =
      event.target &&
      event.target.offsetParent &&
      (event.target.offsetParent.getBoundingClientRect() as DOMRect);

    if (coords) {
      const isInViewport =
        coords.top > 0 &&
        coords.left > 0 &&
        coords.right <=
          (window.innerWidth || document.documentElement.clientWidth) &&
        coords.bottom <=
          (window.innerHeight || document.documentElement.clientHeight);

      if (!isInViewport) {
        tile.x = 0;
        tile.y = 0;
        return this.onPan({ deltaX: 0, deltaY: 0 } as HammerEvent, tile);
      }

      tile.x += event.deltaX;
      tile.y += event.deltaY;

      const pos = document.elementFromPoint(coords.x, coords.y);

      if (pos && pos.id && tile.id.includes(pos.id)) {
        tile.ok = true;
      } else {
        tile.ok = false;
      }

      if (this.allTilesArePositioned()) {
        this.dialog = false;
        this.resolved = true;
      }
    }
  }

  public onContinue() {
    EventBus.$emit("loadOn");
    const enigma = getEnigmaNumber(this.$route.name);
    storageService.saveUserProgress(enigma);
    this.$router.push({
      name: +enigma + 1 <= getLastEnigma() ? `Enigma-${+enigma + 1}` : "Home"
    });
    setTimeout(() => {
      EventBus.$emit("loadOff");
    }, 4000);
  }

  private getIcon(icon: string) {
    return require(`../../../assets/icons/${icon}.svg`);
  }

  private colHasClue(col: number): string {
    const notVisible = [8, 24, 32, 40, 48];
    return notVisible.includes(col) ? "none" : "block";
  }

  private allTilesArePositioned(): boolean {
    const right = this.rightTiles.filter(t => t.ok).length;
    const left = this.leftTiles.filter(t => t.ok).length;
    return right + left === this.rightTiles.length + this.leftTiles.length;
  }
}
