import Vue from "vue";
import Router from "vue-router";

import Welcome from "../components/Welcome.vue";
import PlanetsChart from "../components/PlanetsChart.vue";
import Bitcoin from "../components/Bitcoin.vue";
import Weather from "../components/Weather.vue";
import PlanetsSurvey from "../components/PlanetsSurvey.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome
    },
    {
      path: "/planets-chart",
      name: "PlanetsChart",
      component: PlanetsChart
    },
    {
      path: "/bitcoin",
      name: "Bitcoin",
      component: Bitcoin
    },
    {
      path: "/weather",
      name: "Weather",
      component: Weather
    },
    {
      path: "/planets-survey",
      name: "PlanetsSurvey",
      component: PlanetsSurvey
    }
  ]
});
