<template>
  <div id="app">
    <transition name="fade" >
      <router-view class="child-view" ></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: null,
    };
  },
 
};
</script>

<style scoped >
#app {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

