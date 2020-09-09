<template>
  <div>
    <Header />
    <div class="content">
      <span class="content-title" :name="title">{{ title }}</span>
      <span class="content-description" :name="description">{{
        description
      }}</span>
    </div>
    <div>
      <form @submit.prevent="getData">
        <div class="getdata">
          <div class="inputdata">
            <input type="text" v-model="city" placeholder="Enter a city" />
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      <div class="chart" v-show="chart != null && errorCount === 0">
        <canvas id="chartLine" class="chart-weather"></canvas>
      </div>
      <div class="chart" v-show="chart != null && errorCount === 0">
        <canvas id="chartBar" class="chart-weather"></canvas>
      </div>
      <div v-if="error && errorCount === 1">
        <div class="error" v-for="err in error" :key="err">
          <span class="error__message">{{ err.message }}</span>
          <span class="error__message">Please enter a correct city</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Chart from "chart.js";
import Header from "./Header.vue";

export default {
  data() {
    return {
      chart: null,
      city: "",
      dates: [],
      temps: [],
      loading: false,
      error: [],
      errorCount: 0,
      title: "Weather 🌞 🌦️ 🌧️",
      description: "Search a city and get his weather in a chart"
    };
  },
  components: {
    Header
  },
  methods: {
    getData: function() {
      this.loading = true;
      this.errorCount = 0;
      this.error = [];

      if (this.chart != null) {
        this.chart.destroy();
      }

      axios
        .get("https://api.openweathermap.org/data/2.5/forecast", {
          params: {
            q: this.city,
            units: "imperial",
            appid: "fd3150a661c1ddc90d3aefdec0400de4"
          }
        })
        .then(response => {
          this.dates = response.data.list.map(list => {
            return list.dt_txt;
          });

          this.temps = response.data.list.map(list => {
            return list.main.temp;
          });

          var chartLine = document.getElementById("chartLine");
          this.chart = new Chart(chartLine, {
            type: "line",
            data: {
              labels: this.dates,
              datasets: [
                {
                  label: "Avg. Temp",
                  backgroundColor: "rgba(54, 162, 235, 0.5)",
                  borderColor: "rgb(54, 162, 235)",
                  fill: false,
                  data: this.temps
                }
              ]
            },
            options: {
              title: {
                display: true,
                text: "Temperature from " + this.city
              },
              tooltips: {
                callbacks: {
                  label: function(tooltipItem, data) {
                    var label =
                      data.datasets[tooltipItem.datasetIndex].label || "";

                    if (label) {
                      label += ": ";
                    }

                    label += Math.floor(tooltipItem.yLabel);
                    return label + "°F";
                  }
                }
              },
              scales: {
                xAxes: [
                  {
                    type: "time",
                    time: {
                      unit: "hour",
                      displayFormats: {
                        hour: "M/DD @ hA"
                      },
                      tooltipFormat: "MMM. DD @ hA"
                    },
                    scaleLabel: {
                      display: true,
                      labelString: "Date/Time"
                    }
                  }
                ],
                yAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: "Temperature (°F)"
                    },
                    ticks: {
                      callback: function(value) {
                        return value + "°F";
                      }
                    }
                  }
                ]
              }
            }
          });
          var chartBar = document.getElementById("chartBar");
          this.chart = new Chart(chartBar, {
            type: "bar",
            data: {
              labels: this.dates,
              datasets: [
                {
                  label: "Avg. Temp",
                  backgroundColor: "rgba(54, 162, 235, 0.5)",
                  borderColor: "rgb(54, 162, 235)",
                  fill: false,
                  data: this.temps
                }
              ]
            },
            options: {
              title: {
                display: true,
                text: "Temperature from " + this.city
              },
              tooltips: {
                callbacks: {
                  label: function(tooltipItem, data) {
                    var label =
                      data.datasets[tooltipItem.datasetIndex].label || "";

                    if (label) {
                      label += ": ";
                    }

                    label += Math.floor(tooltipItem.yLabel);
                    return label + "°F";
                  }
                }
              },
              scales: {
                xAxes: [
                  {
                    type: "time",
                    time: {
                      unit: "hour",
                      displayFormats: {
                        hour: "M/DD @ hA"
                      },
                      tooltipFormat: "MMM. DD @ hA"
                    },
                    scaleLabel: {
                      display: true,
                      labelString: "Date/Time"
                    }
                  }
                ],
                yAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: "Temperature (°F)"
                    },
                    ticks: {
                      callback: function(value) {
                        return value + "°F";
                      }
                    }
                  }
                ]
              }
            }
          });
        })
        .catch(error => {
          this.error.push(error);
          this.errorCount += 1;
        })
        .finally(() => (this.loading = false));
    }
  }
};
</script>

<style scoped>
.error {
  position: relative;
  top: 50px;
  display: flex;
  flex-direction: column;
  border: 1px solid grey;
  padding: 1rem;
  width: 30%;
  margin: 0 auto;
  font-size: 12px;
}
.inputdata {
  display: flex;
  justify-content: center;
  height: 35px;
}
input {
  font-size: 12px;
  text-indent: 8px;
  width: 250px;
  border: 1px solid #474646;
  border-radius: 2px;
}
span {
  margin-bottom: 15px;
}
button {
  width: 71px;
  background-color: black;
  color: white;
  font-size: 12px;
  border: unset;
  border-radius: 2px;
}
.weather-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #429ea6;
}
.weather-widget__city {
  font-size: 20px;
  margin: 0;
}
.weather-widget__temp {
  display: flex;
  align-items: flex-start;
  color: #16f4d0;
  font-size: 200px;
  font-weight: 200;
  margin: 0;
}
.weather-widget__status {
  font-size: 20px;
  margin: 0;
}
.content {
  padding: 4rem 0 3rem 0;
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
.chart {
  width: 80%;
  margin: 0 auto;
  padding-top: 4rem;
}
.chart-weather {
  width: 100% !important;
}
@media screen and (max-width: 700px) {
  input {
    width: 150px;
  }
}

@media (min-width: 700px) {
  .content-title {
    font-size: 17px;
  }
}
</style>
