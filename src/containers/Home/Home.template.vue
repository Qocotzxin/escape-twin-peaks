<template>
  <div class="home">
    <h1>Dónde está el agente <span>Cooper</span>?</h1>
    <v-btn outlined class="mt-4">Ingresar</v-btn>
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: url(../../assets/main.png) no-repeat center center fixed;
  animation: move-in 10s linear;

  h1 {
    cursor: default;
    opacity: 0;
    animation-name: flicker;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-delay: 4s;
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
    animation: focus-in 3s cubic-bezier(0.55, 0.085, 0.68, 0.53) 4s both;

    &:hover {
      transform: rotateY(180deg);
    }
  }
}

@keyframes move-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 90%;
  }
}

@keyframes focus-in {
  0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
}

@keyframes flicker {
  0% {
    opacity: 0.1;
  }

  10% {
    opacity: 0.2;
  }

  20% {
    opacity: 0.3;
  }

  100% {
    opacity: 1;
  }
  31.98% {
    opacity: 1;
  }
  32% {
    opacity: 0;
  }
  32.8% {
    opacity: 0;
  }
  32.82% {
    opacity: 1;
  }
  34.98% {
    opacity: 1;
  }
  35% {
    opacity: 0;
  }
  35.7% {
    opacity: 0;
  }
  35.72% {
    opacity: 1;
  }
  36.98% {
    opacity: 1;
  }
  37% {
    opacity: 0;
  }
  37.6% {
    opacity: 0;
  }
  37.62% {
    opacity: 1;
  }
  67.98% {
    opacity: 1;
  }
  68% {
    opacity: 0;
  }
  68.4% {
    opacity: 0;
  }
  68.42% {
    opacity: 1;
  }
  95.98% {
    opacity: 1;
  }
  96% {
    opacity: 0;
  }
  96.7% {
    opacity: 0;
  }
  96.72% {
    opacity: 1;
  }
  98.98% {
    opacity: 1;
  }
  99% {
    opacity: 0;
  }
  99.6% {
    opacity: 0;
  }
  99.62% {
    opacity: 1;
  }
}
</style>
