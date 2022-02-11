<template>
  <div id="app">
    <!--Page Loader-->
    <div data-duration="5" class="alioth-page-loader" data-layout="light">
      <span class="apl-background"></span>

      <!--Loader Percentage (Don't Touch)-->
      <div class="apl-count"></div>
      <!--Loader Percentage (Don't Touch)-->
    </div>
    <!--/Page Loader-->

    <!--Page Transitions-->
    <div class="alioth-page-transitions" data-layout="light">
      <!--Transition Background (Don't touch)-->
      <span class="apt-bg"></span>
      <!--/Transition Background (Don't touch)-->

      <!--Transition Text-->
      <div class="trans-text">Loading, please wait..</div>
      <!--Transition Text-->
    </div>
    <!--/Page Transitions-->

    <!-- Mouse Cursor -->

    <!-- /Mouse Cursor -->
    <Header />
    <Hero />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
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
