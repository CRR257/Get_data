<template>
  <div>
    <div class="welcome-page">
        <router-link class="nav-link" :to="{name: 'Welcome'}" exact>Go to main page</router-link>
      </div>
    <p>Weather</p>
    <form @submit.prevent="getData">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h5>Enter A City:</h5>
          <div class="input-group">
            <input type="text" class="form-control" v-model="city" />
            <div class="input-group-append">
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div>{{this.city}}</div>
    <div v-show="chart != null">
      <canvas id="myChart"></canvas>
    </div>
    <div class="alert alert-info" v-show="loading">Loading...</div>
  </div>
</template>

<script>
// import { HTTP } from "../services/ApiWeather";
import axios from "axios";
import Chart from "chart.js";

export default {
  data() {
    return {
      chart: null,
      city: "",
      dates: [],
      temps: [],
      loading: false,
      errored: false
    };
  },
  methods: {
    getData: function() {
      this.loading = true;

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
            console.log(this.dates)
            return list.dt_txt;
          });

          this.temps = response.data.list.map(list => {
            console.log(this.dates)
            return list.main.temp;
          });

          var ctx = document.getElementById("myChart");
          this.chart = new Chart(ctx, {
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
                text: "Temperature with Chart.js"
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
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    }
  }
};
</script>

<style scoped>
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
span {
  font-size: 30px;
  font-weight: 400;
  margin-top: 35px;
}

.weather-widget__status {
  font-size: 20px;
  margin: 0;
}
</style>
