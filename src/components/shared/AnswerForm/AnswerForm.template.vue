<template>
  <div class="answer mb-8">
    <v-text-field
      color="primary"
      outlined
      placeholder="Respuesta"
      class="mt-8 mr-8"
      v-model="input"
      type="text"
      :rules="rules"
      @keyup.enter="onAnswer"
    ></v-text-field>
    <v-btn outlined color="primary" :disabled="!input.length" @click="onAnswer">
      Enviar
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
.answer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
