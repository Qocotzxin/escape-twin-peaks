<template>
  <div class="home__container">
    <div class="loader" v-if="loading">
      <img src="../../assets/loader.svg" alt="Logo del bacl lodge" />
      <h2>Preparando el Back Lodge...</h2>
    </div>
    <div class="home__body">
      <img
        src="../../assets/main.jpg"
        alt="Imagen del Black Lodge de fondo"
        :onload="toggleLoader()"
      />
      <h1>Quien mató a Laura <span>Palmer</span>?</h1>
      <v-btn outlined class="mt-4">Ingresar</v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #cb4335;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  animation: bg-color 3s linear infinite alternate;

  img {
    width: 30%;
    animation: flicker 3s linear infinite alternate;
  }

  h2 {
    animation: blink 3s both infinite;
  }
}

.home {
  &__container {
    width: 100%;
    height: 100%;
  }

  &__body {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    animation: focus-in 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) 1s both;

    img {
      pointer-events: none;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      object-fit: cover;
    }

    h1 {
      cursor: default;
      opacity: 0;
      animation-name: flicker;
      animation-duration: 2s;
      animation-timing-function: linear;
      animation-delay: 2s;
      animation-iteration-count: infinite;
      animation-direction: alternate;

      &:hover {
        span {
          transform: rotateY(180deg);
          color: crimson;
        }
      }
    }

    button {
      cursor: pointer;
      opacity: 0;
      animation: focus-in 3s cubic-bezier(0.55, 0.085, 0.68, 0.53) 1s both;

      &:hover {
        transform: rotateY(180deg);
      }
    }
  }
}
</style>
