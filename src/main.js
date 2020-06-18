import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import './assets/app.scss'
import jQuery from 'jquery';
window.$=window.jQuery=jQuery;
import 'popper.js';
Vue.config.productionTip = false;
Vue.component('Navbar',require('./components/navbar.vue').default);
Vue.component('Body',require('./sections/body.vue').default);
Vue.component('Reviews',require('./sections/reviews.vue').default);
Vue.component('Footer',require('./sections/footer.vue').default);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
