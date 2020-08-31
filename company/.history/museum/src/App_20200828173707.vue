<template>
  <div id="app">
    <transition :name="transitionName" keep-alive>
      <router-view />
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
  beforeRouteUpdate(to, from, next) {
    let isBack = this.$router.isBack;
    console.log(isBack)
    if (isBack) {
      this.transitionName = "slide-right";
    } else {
      this.transitionName = "slide-left";
    }
    this.$router.isBack = false;
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
/style .slide-left-enter,
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

