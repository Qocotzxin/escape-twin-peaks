<template>
  <div class="not-found">
    <h1>Devuelta en el Black Lodge...</h1>
    <v-btn outlined @click="onClick">Inicio</v-btn>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: url(../../../assets/images/main.jpg) no-repeat center center fixed;
  background-size: cover;
  animation: flicker 3s linear infinite alternate;
  filter: sepia(100%);

  h1 {
    position: absolute;
    top: 9em;
    left: 5em;
  }

  button {
    position: absolute;
    top: 2em;
    left: 5em;
  }
}
</style>
