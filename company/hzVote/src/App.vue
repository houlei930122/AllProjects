<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <transition-group name="fade">
      <router-view key="default" />
    </transition-group>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.router-enter{
  opacity: 0;
}
.router-enter-active{
  transition: opacity 1s ease;
}
.router-enter-to{
  opacity: 1;
}
.router-leave{
  opacity: 1;
}
.router-leave-active{
  transition: opacity 1s ease;
}
.router-leave-to{
  opacity: 0;
}
.fade-enter-active, .fade-leave-avtive {
    transition: opacity 1s
}
.fade-enter, .fade-leave-to {
    opacity: 0
}
</style>
