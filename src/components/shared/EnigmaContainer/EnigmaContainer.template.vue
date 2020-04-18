<template>
  <div class="pattern">
    <BackgroundPatternComponent
      class="pattern__background"
      :style="{ 'background-color': color }"
    />
    <div class="pattern__content pl-8 pr-8">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pattern {
  height: 100%;

  &__background {
    position: absolute;
    z-index: 0;
  }

  &__content {
    z-index: 1;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    overflow: auto;
    background: rgba(0, 0, 0, 0.9);
  }
}
</style>
