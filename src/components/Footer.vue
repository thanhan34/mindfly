<template>
  <!-- Site Footer -->
  <div id="footer" class="site-footer section">
    <!-- Footer Wrapper (Top) -->
    <div class="wrapper">
      <!-- Footer Branding -->
      <div class="c-col-6 footer-widget footer_brand">
        <!-- Footer Logo -->
        <div class="footer-logo">
          <img
            class="footer-logo-image"
            alt="Footer Logo"
            src="../assets/logo.png"
          />
        </div>
        <!-- Footer Logo -->

        <!-- Copyright -->
        <div class="copyright-text">Copyright ©2021. All rights reserved</div>
        <!--/ Copyright -->
      </div>
      <!--/ Footer Branding -->

      <!-- Footer Widget -->
      <div class="c-col-3 footer-widget">
        <!-- Socials Widget -->
        <div class="social-list-widget">
          <ul>
            <li><a target="_blank" href="#.">Twitter</a></li>
            <li><a target="_blank" href="#.">Instagram</a></li>
            <li><a target="_blank" href="#.">Opensea</a></li>
            <li><a target="_blank" href="#.">Discord</a></li>
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
            Subscribe our newsletter to get more free design course and
            resources.
            <br />
            <div class="footer-input-wrapper">
              <input class="footer-input" placeholder="Enter your email" />
            </div>
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
          <a href="mailto:hello@pethemes.com">info@mindfly.art</a>
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
                >Events</a
              >
            </li>
            <li><a href="mailto:hello@pethemes.com">Terms of Service</a></li>
            <li><a target="_blank" href="#.">Privacy</a></li>
          </ul>
        </div>
        <!--/ Footer Menu -->
      </div>
      <!--/ Footer Widget -->
    </div>
    <!-- Footer Wraper (Bottom) -->
  </div>
  <!-- /Site Footer -->
</template>

<script>
export default {
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.footer-logo-image {
  height: 40px;
}
.footer-input-wrapper {
  position: relative;
  display: inline-block;
}

.footer-input-wrapper::before {
  position: absolute;
  content: "\2192";
  top: 20px;
  right: 0px;
  height: 20px;
  width: 20px;
  font-weight: bold;
  font-size: 20px;
}
.footer-input {
  margin-top: 15px;
  padding: 15px;
  border-radius: 30px;
  background-color: #fffefe;

  font-size: 15px;
  font-weight: bold;
  width: 100%;
  font-family: "Inter", sans-serif;
  color: #191b1d;
  border: none;
}
.footer-input:focus {
  outline: none;
}
</style>
