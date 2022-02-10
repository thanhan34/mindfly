<template>
  <div
    id="app"
    data-barba="wrapper"
    data-cursor="true"
    data-header-sticky="true"
    data-menu-style="classic"
    data-page-layout="light"
    data-header-layout="dark"
    data-menu-layout="light"
    data-footer-layout="light"
    data-page-loader="true"
  >
    <Header />
    <Hero />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
// import Navbar from "./components/Navbar.vue";

import Hero from "./components/Hero.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,

    Hero,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
</style>
