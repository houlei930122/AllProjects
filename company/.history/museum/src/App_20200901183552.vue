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
  transition: opacity .28s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.38;
}
.music {
      position: fixed;
      top: 0.28rem;
      right: 0.28rem;
      z-index: 1999;
      width: 0.56rem;
      height: 0.56rem;
      background-image: url("./../assets/music.png");
      background-size: 100% 100%;
      background-repeat: no-repeat
    }

    .music_on {
      background-image: url("./../assets/music.png");
      animation: musicroate 2s linear infinite;
      -webkit-animation: musicroate 2s linear infinite
    }

    @keyframes musicroate {
      from {
        transform: rotate(0);
        -webkit-transform: rotate(0)
      }

      to {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg)
      }
    }

    @-webkit-keyframes musicroate {
      from {
        transform: rotate(0);
        -webkit-transform: rotate(0)
      }

      to {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg)
      }
    }
</style>

