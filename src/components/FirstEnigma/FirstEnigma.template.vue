<template>
  <EnigmaContainerComponent>
    <div class="enigma">
      <div class="enigma__text">
        <h1 class="mb-4 mt-4">25 años después</h1>

        <p class="mt-2">
          Recién llegados a la ciudad de Twin Peaks, deciden tomar rumbo
          inmediatamente hacia la estación de policía para obtener más
          información sobre la investigación que llevaba a cabo Cooper antes de
          desaparecer.
        </p>

        <p>
          Al parecer la policía tiene mucha información disponible, pero hay un
          pequeño problema. Pasaron 25 años y todos los registros sobre el caso
          de Laura Palmer y la investigación de Cooper quedaron bajo candado,
          pero nadie recuerda la clave de 4 dígitos. Habrá alguna pista en el
          armario?
        </p>
      </div>

      <transition name="fade" mode="out-in">
        <div
          v-if="!detail"
          class="enigma__intro pb-6"
          @click="onClick"
          v-hammer:tap="onClick"
          key="intro"
        >
          <img
            src="../../assets/images/enigma-1.jpg"
            alt="Imagen de mueble archivador"
            class="glowing-border"
          />
        </div>
        <div v-else key="detail">
          <div class="enigma__view pt-8">
            <img
              src="../../assets/icons/atomic-bomb.svg"
              alt="Icono de bomba atómica"
            />
            <span>+</span>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <img
                  src="../../assets/images/hermit.jpg"
                  alt="Imagen de la carta de tarot 'El ermitaño'"
                  v-on="on"
                  class="glowing-border"
                />
              </template>
              <span>El ermitaño</span>
            </v-tooltip>
          </div>
          <div class="enigma__answer">
            <v-text-field
              color="primary"
              outlined
              placeholder="Respuesta"
              class="mt-8 mr-8"
              v-model="input"
              type="number"
              :rules="rules"
              @keyup.enter="onAnswer"
            ></v-text-field>
            <v-btn
              outlined
              color="primary"
              :disabled="!input.length"
              @click="onAnswer"
            >
              Enviar
            </v-btn>
          </div>
        </div>
      </transition>
    </div>
  </EnigmaContainerComponent>
</template>

<style lang="scss" scoped>
.enigma {
  &__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 600px;
    background: transparent;
  }

  &__view {
    display: flex;
    align-items: center;
    justify-content: space-around;

    img {
      width: 25%;

      &:last-child {
        border: 2px solid white;
      }
    }

    span {
      font-size: 40px;
    }
  }

  &__intro {
    img {
      width: 100%;
      max-width: 600px;
    }
  }

  &__answer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
