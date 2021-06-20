<template>
  <div>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link :to="{ path: '/' }" class="navbar-item">
          <p>BNT</p>
        </router-link>

        <a role="button" class="navbar-burger" :class="hamburgerClass" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="toggleHamburger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu" :class="hamburgerClass">
        <div class="navbar-start">
          <router-link :to="{ path: '/' }" class="navbar-item">
            Home
          </router-link>
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
      console.log('clicked');
      this.showHamburger = !this.showHamburger;
    },
  },
}
</script>
