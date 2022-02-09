<template>
  <div id="app" data-barba="wrapper">
    <Header />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
// import Navbar from "./components/Navbar.vue";

// import Hero from "./components/Hero.vue";

export default {
  name: "App",
  components: {
    Header,
    // Navbar,
    // Hero,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
</style>
