<template>
  <!--Page Loader-->

  <!-- Header -->
  <div class="site-header">
    <div class="header-wrapper">
      <!-- Site Branding -->
      <div class="site-branding">
        <!-- Site Logos -->
        <div class="site-logo">
          <a href="index.html">
            <img
              alt="Site Logo Light"
              class="light-logo"
              src="../assets/logo.png"
            />
          </a>
        </div>
        <!-- /Site Logos -->
      </div>
      <!-- /Site Branding -->

      <!-- Menu Toggle Button (Don't touch) -->
      <div class="menu-toggle">
        <span class="toggle-line"></span>
        <span class="toggle-line"></span>
      </div>
      <!-- /Menu Toggle Button (Don't touch) -->

      <!-- Site Navigation -->
      <div class="site-navigation">
        <span class="sub-back"><i class="icofont-long-arrow-left"></i></span>

        <!-- Main Menu -->
        <ul class="menu main-menu">
          <li class="menu-item has-children">
            <a href="#.">Home</a>
            <!-- Sub-Menu -->
            <ul class="sub-menu">
              <li class="menu-item"><a href="index.html">Agency</a></li>
              <li class="menu-item">
                <a href="home-personal.html">Personal</a>
              </li>
              <li class="menu-item">
                <a href="home-showcase-carousel.html">Showcase Carousel</a>
              </li>
              <li class="menu-item">
                <a href="home-showcase-list.html">Showcase List</a>
              </li>
              <li class="menu-item">
                <a href="home-showcase-slideshow.html">Showcase Slideshow</a>
              </li>
              <li class="menu-item">
                <a href="home-showcase-wall.html">Showcase Wall</a>
              </li>
              <li class="menu-item">
                <a href="home-fullscreen-slider.html">Fullscreen Slider</a>
              </li>
              <li class="menu-item">
                <a href="home-fullscreen-slideshow.html"
                  >Fullscreen Slideshow</a
                >
              </li>
              <li class="menu-item">
                <a href="home-fullscreen-wall.html">Fullscreen Wall</a>
              </li>
              <li class="menu-item"><a href="home-shop.html">Shop</a></li>
            </ul>
            <!-- /Sub-Menu -->
          </li>

          <li class="menu-item has-children">
            <a href="#.">Mindmap</a>
            <!-- Sub-Menu -->
            <ul class="sub-menu">
              <li class="menu-item"><a href="about.html">About Us</a></li>
              <li class="menu-item"><a href="about-me.html">About Me</a></li>
              <li class="menu-item"><a href="our-team.html">Team</a></li>
              <li class="menu-item"><a href="clients.html">Clients</a></li>
              <li class="menu-item">
                <a href="our-services.html">Services</a>
              </li>
              <li class="menu-item">
                <a href="404-not-found.html">404 Page</a>
              </li>
            </ul>
            <!-- /Sub-Menu -->
          </li>

          <li class="menu-item"><a href="works.html">MPassport</a></li>
          <li class="menu-item has-children">
            <a href="#.">Market</a>

            <!-- Sub-Menu -->
            <ul class="sub-menu">
              <li class="menu-item">
                <a href="blog-list.html">Blog - List</a>
              </li>
              <li class="menu-item">
                <a href="blog-classic.html">Blog - Classic</a>
              </li>

              <li class="menu-item">
                <a href="single-post.html">Single Post</a>
              </li>
            </ul>
            <!-- /Sub-Menu -->
          </li>

          <li class="menu-item has-children">
            <a href="#.">GameFi</a>
            <!-- Sub-Menu -->
            <ul class="sub-menu">
              <li class="menu-item"><a href="products.html">Products</a></li>
              <li class="menu-item">
                <a href="single-product.html">Single Product</a>
              </li>
              <li class="menu-item"><a href="cart.html">Cart</a></li>
              <li class="menu-item"><a href="checkout.html">Checkout</a></li>
            </ul>
            <!-- /Sub-Menu -->
          </li>
        </ul>
        <!-- /Main Menu -->

        <!-- Menu Widget (Left) -->
        <div class="menu-widget menu-widget-left">
          <ul class="social-list">
            <li><a href="#.">Facebook</a></li>
            <li><a href="#.">Instagram</a></li>
            <li><a href="#.">Twitter</a></li>
            <li><a href="#.">LinkedIn</a></li>
          </ul>
        </div>
        <!-- /Menu Widget (Left) -->

        <!-- Menu Widget (Right) -->
        <div class="menu-widget menu-widget-right">
          <div class="git-button">
            <a href="mailto:hello@pethemes.com">Get in touch!</a>
          </div>
        </div>
        <!-- /Menu Widget (Right) -->
      </div>
      <!-- /Site Navigation -->

      <!-- Header Widgets -->
      <div class="header-widgets">
        <!-- Header Widget-->
        <div class="header-widget">
          <!--CTA Widget-->
          <div class="header-cta-but">
            <a data-hover=" Become an Artist" href="mailto:hello@pethemes.com">
              Become an Artist
            </a>
          </div>
          <!--CTA Widget-->
        </div>
        <!-- Header Widget-->
      </div>
      <!-- /Header Widgets -->
    </div>
  </div>
  <!-- /Header -->
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
