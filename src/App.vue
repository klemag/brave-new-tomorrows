<template>
  <div id="app-container">
    <navbar></navbar>
    <div class="app-contents container is-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './layout/navbar.vue';
export default {
  name: 'App',
  components: {
    Navbar,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
