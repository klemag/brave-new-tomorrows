<template>
  <div>
    <navbar></navbar>
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue';

export default {
  components: {
    navbar: Navbar,
  },
};
</script>
