<template>
  <div>
    <Header :name="title"></Header>
    <div class="home">
      <div>
        <router-link class="nav-link" :to="{ name: 'Welcome' }" exact
          >Go to main page</router-link
        >
      </div>
      <main>
        <router-view />
      </main>
      <main>
        <canvas id="planet-chart"></canvas>
      </main>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Chart from "chart.js";
import planetChartData from "../chart-data.js";

export default {
  name: "Home",
  props: {
    msg: String
  },
  components: {
    Header
  },
  methods: {
    /* eslint-disable no-unused-vars */
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      /* eslint-disable no-unused-vars */
      const myChart = new Chart(ctx, {
        /* eslint-disable no-unused-vars */
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    }
    /* eslint-disable no-unused-vars */
  },

  data() {
    return { planetChartData, title: "Planet's chart" };
  },
  mounted() {
    this.createChart("planet-chart", this.planetChartData);
  }
};
</script>

<style scoped>
.home {
  position: relative;
}
.nav-link {
  position: absolute;
  border: 1px solid grey;
  left: 0px;
  font-size: 15px;
  letter-spacing: 1.4px;
  padding: 12px;
  border-radius: 2px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
canvas {
  padding: 7rem 0;
}
</style>
