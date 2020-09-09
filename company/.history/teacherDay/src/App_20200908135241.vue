<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .28s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
