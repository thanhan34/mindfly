import Vue from 'vue'
import App from './App.vue'
import "bootstrap";
import "popper.js";
import "../css/plugins.css"
import "../css/style.css"




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
