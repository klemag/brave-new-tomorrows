<template>
  <div>
    <nav
      class="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <NuxtLink to="/" class="navbar-item">
          <img alt="logo" width="40" src="../assets/logo.png" />
        </NuxtLink>

        <a
          role="button"
          class="navbar-burger"
          :class="hamburgerClass"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="toggleHamburger"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu" :class="hamburgerClass">
        <div class="navbar-start">
          <NuxtLink to="/" class="navbar-item">
            Home
          </NuxtLink>
          <NuxtLink to="/blog" class="navbar-item">
            Blog
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({
    showHamburger: false,
  }),
  computed: {
    hamburgerClass() {
      return this.showHamburger ? 'is-active' : '';
    },
  },
  methods: {
    toggleHamburger() {
      this.showHamburger = !this.showHamburger;
    },
  },
};
</script>
<style scoped>
.navbar-item {
  text-align: right;
}

.navbar-brand {
  margin-left: 1%;
}
</style>
