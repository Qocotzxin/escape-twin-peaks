<template>
  <div class="intro">
    <div class="intro__header mb-4 mt-12">
      <h1>Historia</h1>
      <transition name="fade">
        <v-btn v-if="step === 2" @click="step = 0" outlined color="black"
          >Inicio</v-btn
        >
      </transition>
    </div>

    <div class="intro__container mt-12">
      <transition name="fade" mode="out-in">
        <div class="intro__item" v-if="step === 0" :key="step">
          <p>
            El agente <span>Dale Cooper</span> fue designado para investigar el
            <span>horroroso crimen</span> de una joven llamada
            <span>Laura Palmer</span>, en el alejado y olvidado pueblo de
            <span>Twin Peaks</span>. Cooper logra dar con el supuesto asesino de
            Laura, ayudado por la policía local, pero tras una serie de
            <span>sucesos extraños</span>, y casi al borde de desentrañar un
            misterio aterrador, <span>desaparece</span> sin dejar rastro
            aparente.
          </p>
          <img
            src="../../assets/icons/cherry-pie.svg"
            alt="Icono separador de pastel"
            @click="onStepChange"
          />
        </div>
        <div class="intro__item" v-if="step === 1" :key="step">
          <p>
            La ciudad está conmocionada y nadie sabe que sucedió. El aparente
            asesino de Laura fue apresado días antes de la desaparición de
            Cooper, pero todos los indicios apuntan a que hay algo en la
            historia que
            <span>no encaja</span>. Lamentablemente para Cooper,
            <span>pasarán varios años</span> hasta que un nueva serie de
            <span>eventos macabros</span> llamen la atención de los integrantes
            de la policía, y decidan retomar la inconclusa investigación para
            encontrar a Cooper y descubrir lo que
            <span>realmente sucedió</span> con Laura Palmer.
          </p>
          <img
            src="../../assets/icons/coffe-mug.svg"
            alt="Icono separador de cafe"
            @click="onStepChange"
          />
        </div>
        <div class="intro__item" v-if="step === 2" :key="step">
          <p>
            Ustedes van a formar parte del equipo que ayudará a la policía de
            Twin Peaks a retomar la investigación para develar los misterios
            ocultos de esta extraña ciudad...Serán capaces de
            <span>encontrar al agente Cooper</span>, y descubrir el
            <span>secreto oculto</span> detrás del asesinato de Laura Palmer?
          </p>
          <img
            src="../../assets/icons/zig-zag.svg"
            alt="Icono separador representativo de Twin Peaks"
            @click="onLastClick()"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.intro {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #212121;

  &__header {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &__container {
    overflow: auto;
    height: 100%;
    padding: 0 3em;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:hover span {
      color: crimson;
      transition: color 2s;
    }

    p {
      font-size: 18px;
    }

    img {
      width: 8em;
      cursor: pointer;

      &:hover {
        transform: rotateY(180deg);
      }
    }
  }
}

.highlight span {
  color: crimson;
  transition: color 2s;
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
