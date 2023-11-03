<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TestApi msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import TestApi from './components/TestApi.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
    TestApi,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0a2211;
  margin-top: 60px;
}
</style>
