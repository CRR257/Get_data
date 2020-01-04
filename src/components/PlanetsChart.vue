<template>
  <div>
    <Header />
    <div class="content">
      <span class="content-title" :name="title">{{ title }}</span>
      <span class="content-description" :name="description">{{ description }}</span>
    </div>
    <main class="canvas">
      <canvas id="planet-chart"></canvas>
    </main>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Chart from "chart.js";
import planetChartData from "../chart-data.js";

export default {
  name: "Home",
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
    return {
      planetChartData,
      title: "Planet's chart",
      description: "Chart with number of moons and mass for each planet"
    };
  },
  mounted() {
    this.createChart("planet-chart", this.planetChartData);
  }
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  width: 68%;
  margin: 0 auto;
}
.content-title {
  font-size: 15px;
  padding-bottom: 1rem;
  text-decoration: underline;
  font-weight: 700;
}
.content-description {
  font-size: 12px;
}
.canvas {
  width: 80%;
  margin: 0 auto;
  padding-bottom: 6rem;
}
#planet-chart {
  width: 80%;
}
@media screen and (max-width: 700px) {
  .content {
    padding: 7rem 0 3rem 0;
  }
}

@media (min-width: 700px) {
  .content {
    padding: 10rem 0 3rem 0;
  }
  .content-title {
    font-size: 17px;
  }
}
</style>
