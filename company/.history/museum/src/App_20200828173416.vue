<template>
  <div id="app">
    <transition name="slide">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped >
#app {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
}

.slide-right-enter {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translateX(100%);
}

.slide-left-enter {
  opacity: 0;
  transform: translateX(100%);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translateX(-100%);
}
</style>

