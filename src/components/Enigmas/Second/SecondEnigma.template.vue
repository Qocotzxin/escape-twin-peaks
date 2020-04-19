<template>
  <EnigmaContainerComponent>
    <div class="enigma__text">
      <h1 class="mb-4 mt-4">Revisando el pasado</h1>

      <p class="mt-2">
        La clave no era otra cosa que la fecha de nacimiento de Cooper.
        Finalmente logran abrir el cajón del archivador para comenzar a recabar
        información.
      </p>

      <p>
        Algo capta la atención de sus ojos mientras revisan la interminable pila
        de archivos. Son unas extrañas palabras que parecen guardar información
        importante, y un disco que al parecer, podría ser de ayuda para
        descifrar el mensaje...
      </p>

      <p class="font-italic">
        "Swa jcowa uw awu sw ycm xizmkmu"
      </p>
      <div class="wheel" @click="onWheelChange">
        <img
          src="../../../assets/images/wheel.png"
          alt="Rueda de cifrado Cesar - exterior"
        />
        <img
          src="../../../assets/images/wheel.png"
          alt="Rueda de cifrado Cesar - interior"
          class="internal"
          :class="{ internal__paused: paused }"
        />
        <span>
          P = M
        </span>
      </div>

      <AnswerFormComponent :correctAnswer="answer" />
    </div>
  </EnigmaContainerComponent>
</template>

<style lang="scss" scoped>
.enigma__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  background: transparent;
}

.wheel {
  position: relative;

  img:first-child {
    width: 300px;
  }

  .internal {
    width: 235px;
    position: absolute;
    left: 2em;
    top: 2em;
    animation: rotate-wheel 15s infinite linear;

    &__paused {
      animation-play-state: paused;
    }
  }

  span {
    position: absolute;
    left: 5.3em;
    top: 5.4em;
    font-size: 24px;
    font-weight: bold;
  }
}
</style>
