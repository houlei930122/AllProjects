<template>
  <div id="app">
    <transition name="slide-left" keep-alive>
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
  .child-view {
  position: absolute;
  width:100%;
  transition: all .8s cubic-bezier(.55,0,.1,1);
  }
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-50px, 0);
}
</style>

