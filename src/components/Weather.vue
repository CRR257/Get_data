<template>
  <div>
    <Header :name="title"></Header>
    <div>
      <router-link class="nav-link" :to="{ name: 'Welcome' }" exact>
        Go to main page</router-link
      >
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
      <div v-show="chart != null && errorCount === 0">
        <canvas id="chartLine" class="chart"></canvas>
      </div>
      <div v-show="chart != null && errorCount === 0">
        <canvas id="chartBar" class="chart"></canvas>
      </div>
      <div v-if="error && errorCount === 1">
        <div class="error" v-for="err in error" :key="err">
          <span class="error__message">{{ err.message }}</span>
          <span class="error__message">Please enter a correct city</span>
        </div>
      </div>
      <!-- <div class="alert alert-info" v-show="loading">Loading...</div> -->
    </div>
  </div>
</template>

<script>
// import { HTTP } from "../services/ApiWeather";
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
      title: "Weather"
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
.getdata {
  padding-top: 2rem;
}
.error {
  position: relative;
  top: 170px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
}
.inputdata {
  display: flex;
  justify-content: center;
  height: 40px;
  position: relative;
  top: 3rem;
}
input {
  font-size: 22px;
  text-indent: 8px;
  width: 320px;
  border: 1px solid #474646;
}
span {
  font-size: 21px;
  font-weight: 400;
  margin-bottom: 15px;
}
button {
  width: 71px;
  background-color: black;
  color: white;
  font-size: 16px;
  border: unset;
}
.chart {
  padding: 4rem 0;
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
.nav-link {
  color: white;
  position: absolute;
  left: 0px;
  font-size: 15px;
  letter-spacing: 1.4px;
  padding: 12px;
  background-color: #7a1a1ae3;
  border-radius: 2px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
