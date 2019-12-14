import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
// import store from "./store/store";

Vue.config.productionTip = false;
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  render: h => h(App),
  router
  // store
}).$mount("#app");
