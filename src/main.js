import Vue from 'vue'
import App from './App.vue'
import "bootstrap";
import "popper.js";
import "../../mindfly/css/plugins.css"
import "../../mindfly/css/style.css"




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
