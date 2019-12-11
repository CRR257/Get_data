<template>
  <div>
    <Header />
    <div class="home">
      <div class="welcome-page">
        <router-link class="nav-link" :to="{name: 'Welcome'}" exact>See you later!</router-link>
      </div>
      <main>
        <router-view />
      </main>
      <main>
        <canvas id="planet-chart"></canvas>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import Chart from "chart.js";
import planetChartData from "../chart-data.js";

export default {
  name: "Home",
  props: {
    msg: String
  },
  components: {
    Footer,
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
    return { planetChartData };
  },
  mounted() {
    this.createChart("planet-chart", this.planetChartData);
  }
};
</script>

<style scoped>
h3 {
  color: rgb(128, 0, 90);
}
.home {
  position: relative;
}
.nav-link {
  color: white;
  position: absolute;
  top: -11px;
  left: 0px;
  font-size: 18px;
  letter-spacing: 1.4px;
  padding: 12px;
  background-color: grey;
  border-radius: 6px;
}
</style>
