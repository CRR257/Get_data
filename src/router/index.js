import Vue from "vue";
import Router from "vue-router";

import Welcome from "../components/Welcome.vue";
import Home from "../components/Home.vue";


Vue.use(Router);

export default new Router({
  routes: [{
    path: "/",
    name: "Welcome",
    component: Welcome,
  }, {
    path: '/home',
    name: 'Home',
    component: Home,
  }],
});