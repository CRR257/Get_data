import Vue from "vue";
import Router from "vue-router";

import Welcome from "../components/Welcome.vue";
import PlanetsChart from "../components/PlanetsChart.vue";
import Posts from "../components/Posts.vue";
import Weather from "../components/Weather.vue";
import Form from "../components/Form.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome
    },
    {
      path: "/planets",
      name: "PlanetsChart",
      component: PlanetsChart
    },
    {
      path: "/posts",
      name: "Posts",
      component: Posts
    },
    {
      path: "/weather",
      name: "Weather",
      component: Weather
    },
    {
      path: "/form",
      name: "Form",
      component: Form
    }
  ]
});
