<template>
  <div
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
    <div
      data-dark-circle="rgba(25,27,29,.6)"
      data-dark-dot="#191b1d"
      data-light-circle="hsla(0,0%,100%,.2)"
      data-light-dot="#fff"
      id="mouseCursor"
    >
      <div id="cursor"></div>
      <div id="dot"></div>
    </div>
    <!-- /Mouse Cursor -->

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
                src="../assets/site-logo.png"
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
              <a
                data-hover=" Become an Artist"
                href="mailto:hello@pethemes.com"
              >
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

    <!-- Page -->
    <div id="page" data-barba="container">
      <!-- Page Content -->
      <div id="content" class="page-content">
        <!--Section-->
        <div class="section no-margin">
          <!--Wrapper-->
          <div class="wrapper-full no-gap no-margin">
            <!--Column-->
            <div class="c-col-12 no-gap">
              <!--Showcase Slider V2-->
              <div
                class="portfolio-showcase showcase-slideshow-v2"
                data-barba-namespace="sc-slideshow"
              >
                <!-- Slider Background Texts (Don't touch) -->
                <span class="ss2-overlay"></span>
                <div class="ss2-back-texts"></div>
                <!--/ Slider Background Texts (Don't touch) -->

                <!-- Projects Wrapper -->
                <div class="showcase-slideshow-2-wrapper">
                  <!-- Project -->
                  <div class="ss2-project">
                    <!-- Project Metas -->
                    <div class="ss2-project-meta">
                      <!-- Project Category -->
                      <div class="ss2-project-cat">Home</div>
                      <!--/ Project Category -->

                      <!-- Project Title -->
                      <div class="ss2-project-title">Home</div>
                      <!--/ Project Title -->

                      <!-- Project Excerpt -->
                      <div class="ss2-project-excerpt">
                        Billions upon billions rings of Uranus Drake Equation
                        hearts of the stars ship of the imagination great
                        turbulent clouds.
                      </div>
                      <!--/ Project Excerpt -->
                    </div>
                    <!--/ Project Metas -->

                    <!-- Project Image -->
                    <div class="ss2-project-image">
                      <img
                        alt="Project İmage"
                        src="../assets/mindfly-feature-1.png"
                      />
                    </div>
                    <!--/ Project Image -->

                    <!-- Project URL -->
                    <a class="ss2-project-url" href="project-5.html"></a>
                    <!--/ Project URL -->
                  </div>
                  <!--/ Project -->

                  <!-- Project -->
                  <div class="ss2-project">
                    <!-- Project Metas -->
                    <div class="ss2-project-meta">
                      <!-- Project Category -->
                      <div class="ss2-project-cat">The Mindfly MPassport</div>
                      <!--/ Project Category -->

                      <!-- Project Title -->
                      <div class="ss2-project-title">The Mindfly MPassport</div>
                      <!--/ Project Title -->

                      <!-- Project Excerpt -->
                      <div class="ss2-project-excerpt">
                        A mote of dust suspended in a sunbeam Jean-François
                        Champollion Flatland Euclid explorations extraplanetary?
                      </div>
                      <!--/ Project Excerpt -->
                    </div>
                    <!--/ Project Metas -->

                    <!-- Project Image -->
                    <div class="ss2-project-image">
                      <!--Project Video-->
                      <div
                        class="showcase-video"
                        data-plyr-provider="vimeo"
                        data-plyr-embed-id="631871963"
                      ></div>
                      <!--/Project Video-->
                    </div>
                    <!--/ Project Image -->

                    <!-- Project URL -->
                    <a class="ss2-project-url" href="project-4.html"></a>
                    <!--/ Project URL -->
                  </div>
                  <!--/ Project -->

                  <!-- Project -->
                  <div class="ss2-project">
                    <!-- Project Metas -->
                    <div class="ss2-project-meta">
                      <!-- Project Category -->
                      <div class="ss2-project-cat">The Mindfly MPassport</div>
                      <!--/ Project Category -->

                      <!-- Project Title -->
                      <div class="ss2-project-title">The Mindfly MPassport</div>
                      <!--/ Project Title -->

                      <!-- Project Excerpt -->
                      <div class="ss2-project-excerpt">
                        Rogue shores of the cosmic ocean kindling the energy
                        hidden in matter Cambrian explosion star stuff.
                      </div>
                      <!--/ Project Excerpt -->
                    </div>
                    <!--/ Project Metas -->

                    <!-- Project Image -->
                    <div class="ss2-project-image">
                      <img
                        alt="Project İmage"
                        src="../assets/mindfly-feature-4.png"
                      />
                    </div>
                    <!--/ Project Image -->

                    <!-- Project URL -->
                    <a class="ss2-project-url" href="project-9.html"></a>
                    <!--/ Project URL -->
                  </div>
                  <!--/ Project -->

                  <!-- Project -->
                  <div class="ss2-project">
                    <!-- Project Metas -->
                    <div class="ss2-project-meta">
                      <!-- Project Category -->
                      <div class="ss2-project-cat">The Mindfly GameFi</div>
                      <!--/ Project Category -->

                      <!-- Project Title -->
                      <div class="ss2-project-title">The Mindfly GameFi</div>
                      <!--/ Project Title -->

                      <!-- Project Excerpt -->
                      <div class="ss2-project-excerpt">
                        The ash of stellar alchemy a very small stage in a vast
                        cosmic arena.
                      </div>
                      <!--/ Project Excerpt -->
                    </div>
                    <!--/ Project Metas -->

                    <!-- Project Image -->
                    <div class="ss2-project-image">
                      <img
                        alt="Project İmage"
                        src="../assets/mindfly-feature-8.png"
                      />
                    </div>
                    <!--/ Project Image -->

                    <!-- Project URL -->
                    <a class="ss2-project-url" href="project-6.html"></a>
                    <!--/ Project URL -->
                  </div>
                  <!--/ Project -->

                  <!-- Project -->

                  <!--/ Project -->
                </div>
                <!--/ Projects Wrapper -->

                <!-- Projects Button -->
                <div class="ss2-button">
                  <a href="#.">Read More</a>
                </div>
                <!--/ Projects Button -->

                <!-- Images Wrapper (Don't touch) -->
                <div class="ss2-images swiper-container"></div>
                <!--/ Images Wrapper (Don't touch) -->

                <!-- Slider Navigation Elements (Don't touch) -->
                <div class="ss2-dots"></div>
                <div class="ss2-nav">
                  <div class="ss2-prev"><i class="icofont-thin-left"></i></div>
                  <div class="ss2-fract">
                    <div class="ss2-curr">01</div>
                    <div class="ss2-tot">03</div>
                  </div>
                  <div class="ss2-next"><i class="icofont-thin-right"></i></div>
                </div>
                <!--/ Slider Navigation Elements (Don't touch) -->

                <!-- Showcase Footer -->
                <div class="showcase-footer ss2-footer">
                  <!--Showcase Footer Left-->
                  <div class="ss2-footer-left">
                    <!--Scroll Notice-->
                    <div class="scroll-notice" data-target="#secondSec">
                      <span>SCROLL</span>
                    </div>
                    <!--/Scroll Notice-->
                  </div>
                  <!--/Showcase Footer Left-->
                </div>
                <!-- Showcase Footer -->
              </div>
              <!--Showcase Slider V2-->
            </div>
            <!--/Column-->
          </div>
          <!--/Wrapper-->
        </div>
        <!--/Section -->

        <!--Section -->
        <div class="section">
          <!--Wrapper-->
          <div class="wrapper-full no-margin">
            <!--Column-->
            <div class="c-col-12 no-gap no-margin">
              <!-- Page Nav -->
              <div class="alioth-page-nav" style="background-color: #f1f1f1">
                <!--Page URL-->
                <a href="works.html">
                  <!-- Page Title -->
                  <div class="page-title">
                    Mindfly not only Arts and Technology
                  </div>
                  <!-- /Page Title -->

                  <!-- Page Sub-Title -->

                  <!-- /Page Sub-Title -->
                </a>
              </div>
              <!-- /Page Nav -->
            </div>
            <!--/Column-->
          </div>
          <!--/Wrapper-->
        </div>
        <!--/Section -->
      </div>
      <!-- /Page Content -->
    </div>
    <!-- /Page -->

    <!-- Site Footer -->
    <div id="footer" class="site-footer section">
      <!-- Footer Wrapper (Top) -->
      <div class="wrapper">
        <!-- Footer Branding -->
        <div class="c-col-6 footer-widget footer_brand">
          <!-- Footer Logo -->
          <div class="footer-logo">
            <img alt="Footer Logo" src="img/footer-logo.png" />
          </div>
          <!-- Footer Logo -->

          <!-- Copyright -->
          <div class="copyright-text">2020©</div>
          <!--/ Copyright -->
        </div>
        <!--/ Footer Branding -->

        <!-- Footer Widget -->
        <div class="c-col-3 footer-widget">
          <!-- Socials Widget -->
          <div class="social-list-widget">
            <ul>
              <li><a target="_blank" href="#.">Facebook</a></li>
              <li><a target="_blank" href="#.">Instagram</a></li>
              <li><a target="_blank" href="#.">Twitter</a></li>
              <li><a target="_blank" href="#.">LinkedIn</a></li>
              <li><a target="_blank" href="#.">Behance</a></li>
            </ul>
          </div>
          <!--/ Socials Widget -->
        </div>
        <!--/ Footer Widget -->

        <!-- Footer Widget -->
        <div class="c-col-3 footer-widget">
          <!-- Text Box -->
          <div class="alioth-text-box">
            <h5 style="color: rgba(25, 27, 29, 0.6)">
              #15–7015 Avenue of Americas <br />New York, NY L5S 1T7
              <br />
              <br />+1 812 585 14 23
            </h5>
          </div>
          <!--/ Text Box -->
        </div>
        <!--/ Footer Widget -->
      </div>
      <!--/ Footer Wraper (Top) -->

      <!-- Footer Wraper (Bottom) -->
      <div class="wrapper">
        <!-- Footer Widget -->
        <div class="c-col-6 footer-widget footer_cta">
          <!-- CTA -->
          <div class="big-button">
            <a href="mailto:hello@pethemes.com">hello@pethemes.com</a>
          </div>
          <!--/ CTA -->
        </div>
        <!--/ Footer Widget -->

        <!-- Footer Widget -->
        <div class="c-col-6 footer-widget footer_menu">
          <!-- Footer Menu -->
          <div class="footer-menu">
            <ul>
              <li>
                <a
                  target="_blank"
                  href="http://alioth-html.pethemes.com/documentation"
                  >Documentation</a
                >
              </li>
              <li><a href="mailto:hello@pethemes.com">Support</a></li>
              <li><a target="_blank" href="#.">Purchase</a></li>
            </ul>
          </div>
          <!--/ Footer Menu -->
        </div>
        <!--/ Footer Widget -->
      </div>
      <!-- Footer Wraper (Bottom) -->
    </div>
    <!-- /Site Footer -->
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
