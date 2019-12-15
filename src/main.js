import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";

import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.http.options.root = "https://get-data-crr257.firebaseio.com/data.json";
// all the request will be sent to this ulr (for Form.vue)
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
