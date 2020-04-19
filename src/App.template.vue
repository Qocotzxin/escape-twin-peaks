<template>
  <div id="app">
    <v-app>
      <v-content>
        <div class="loader" v-if="loading">
          <img src="./assets/icons/loader.svg" alt="Logo del black lodge" />
          <h2>Fire walk with me...</h2>
        </div>
        <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  font-family: "Oswald", sans-serif;
}

.loader {
  position: absolute;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  background-color: #cb4335;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9;
  animation: bg-color 3s linear infinite alternate;

  img {
    width: 30%;
    animation: flicker 3s linear infinite alternate;
  }

  h2 {
    animation: blink 3s both infinite;
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
