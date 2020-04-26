<template>
  <EnigmaContainerComponent>
    <div class="enigma__text">
      <h1 class="mb-4 mt-4">Haciendo una llamada</h1>

      <div v-if="!resolved">
        <p class="mt-2">
          El nombre de la misteriosa señora conocida como "Log Lady" era clave
          en esta historia, y había que contactarla cuanto antes.
        </p>

        <p>
          En Twin Peaks la señal no es muy buena y la gente todavía prefiere
          comunicarse utilizando viejas costumbres, entre otras el teléfono de
          línea, por lo que inmediatamente se dirigen hacia la recepción para
          hacer la llamada.
        </p>

        <p>
          Una pecular mujer nos atiende en la misma, pero nos dice que antes de
          hacer la llamada necesitamos ayudarla con un juego que la lleva
          desvelada toda la noche. Ella es la esposa de uno de los policías,
          quien con una mirada cómplice nos pide que la ayudemos...
        </p>
      </div>

      <div v-else>
        <p class="mt-2 font-italic">
          "Muchas gracias detective! Pensé que nunca iba a resolverlo, puede
          hacer la llamada ahora..."
        </p>

        <p>
          Tras una sonrisa en forma de agradecimiento del esposo, marcamos el
          número que nos dijo el sheriff para comunicarnos con "Log Lady".
        </p>

        <v-btn outlined class="mb-6" @click="onContinue">Continuar</v-btn>
      </div>
      <div v-if="!resolved">
        <v-dialog fullscreen v-model="dialog" persistent>
          <template v-slot:activator="{ on }">
            <v-btn outlined v-on="on" class="mb-6">Jugar</v-btn>
          </template>

          <v-card>
            <v-btn icon class="close" @click="dialog = false"
              ><v-icon>close</v-icon></v-btn
            >
            <div class="game">
              <!-- Games pieces -->
              <!-- Left blocks -->
              <div class="game__pieces">
                <div
                  class="game__piece"
                  :class="{ 'game__piece--vertical': tile.vertical }"
                  v-for="(tile, index) in leftTiles"
                  :key="`leftTile-${index}`"
                  draggable="true"
                  v-hammer:pan="e => onPan(e, tile)"
                  v-hammer:panend="e => onPanEnd(e, tile)"
                  :style="tile.style"
                >
                  <div
                    v-for="(icon, j) in tile.icons"
                    :key="index + icon + j"
                    draggable="false"
                    :class="{ column: tile.vertical }"
                  >
                    <img draggable="false" :src="getIcon(icon)" :alt="icon" />
                  </div>
                </div>
              </div>
              <!-- Game board -->
              <div class="game__board">
                <div class="game__board-container">
                  <div
                    v-for="col in 42"
                    :key="col"
                    :id="`col-${col}`"
                    :class="{ 'game__board--clue-box': col === 14 }"
                  ></div>
                </div>
                <div class="game__board--clue">
                  <img
                    src="../../../assets/icons/zig-zag-variant.svg"
                    alt="Pista de imagen de zig zag en posicion inicial"
                  />
                </div>
              </div>
              <!-- Right blocks -->
              <div class="game__pieces">
                <div
                  class="game__piece"
                  :class="{ 'game__piece--vertical': tile.vertical }"
                  v-for="(tile, index) in rightTiles"
                  :key="`rightTile-${index}`"
                  draggable="true"
                  v-hammer:pan="e => onPan(e, tile)"
                  v-hammer:panend="e => onPanEnd(e, tile)"
                  :style="tile.style"
                >
                  <div
                    v-for="(icon, j) in tile.icons"
                    :key="index + icon + j"
                    :class="{ column: tile.vertical }"
                  >
                    <img draggable="false" :src="getIcon(icon)" :alt="icon" />
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </EnigmaContainerComponent>
</template>
<style lang="scss" scoped>
.close {
  position: absolute;
  top: 1em;
  right: 1em;
  z-index: 4;
}
.game {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transform: scale(0.8);

  @media only screen and (orientation: landscape) {
    flex-direction: row;
    height: 100vh;
    max-height: 600px;
    padding: 0 6em 0 1em;
    transform: scale(1);
  }

  &__pieces {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media only screen and (orientation: landscape) {
      flex-direction: column;
      height: 80%;
      width: 25%;
    }
  }

  &__piece {
    z-index: 2;
    width: 80px;
    height: 38px;
    display: flex;
    align-items: center;
    border: 1px solid transparent;
    background-color: wheat;
    font-weight: bold;
    color: #212121;
    cursor: move;
    border-radius: 4px;

    &:nth-child(even) {
      right: 2em;
      left: initial;
    }

    div {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      &:first-child {
        border-right: 2px solid firebrick;
      }

      & > img {
        width: 100%;
        height: 100%;
        margin-top: 18%;
      }
    }

    &--vertical {
      width: 40px;
      height: 80px;
      flex-direction: column;

      div {
        height: 50%;
        img {
          margin-top: 0;
        }
      }

      div.column:first-child {
        border-bottom: 2px solid firebrick;
        border-right: none;
      }
    }
  }

  &__board {
    position: relative;

    &--clue-box {
      width: 80px !important;
      background-color: rgba(255, 255, 255, 0.3) !important;
      filter: blur(5px);
    }

    &--clue {
      width: 40px;
      height: 40px;
      z-index: 0;
      position: absolute;
      top: 40px;
      right: -2.5em;
    }
  }

  &__board-container {
    display: grid;
    grid-template-columns: repeat(7, 40px);
    grid-template-rows: repeat(6, 40px);
    background-color: rgba(255, 255, 255, 0.6);
    filter: blur(3px);
    z-index: 3;

    div {
      height: 40px;
      background: transparent;

      &:nth-child(9),
      &:nth-child(10),
      &:nth-child(11),
      &:nth-child(12),
      &:nth-child(13),
      &:nth-child(23),
      &:nth-child(24),
      &:nth-child(25),
      &:nth-child(27),
      &:nth-child(30),
      &:nth-child(31),
      &:nth-child(32),
      &:nth-child(34) {
        background: #212121;
        border-color: #212121;
      }
    }
  }
}

// transform: rotate(-90deg);
// transform-origin: left top;
// width: 100vh;
// overflow-x: hidden;
// position: absolute;
// top: 100%;
// left: 0;
</style>
