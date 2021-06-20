<template>
  <div id="app-container">
    <navbar></navbar>
    <div class="app-contents container is-fluid">
      <router-view></router-view>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import Navbar from "./layout/navbar.vue";
// import Footer from "./layout/footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    // Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #8c8e91;

}
</style>
