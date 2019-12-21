<template>
  <div>
    <Header :name="title"></Header>
    <div>
      <router-link class="nav-link" :to="{ name: 'Welcome' }" exact
        >Go to main page</router-link
      >
    </div>
    <div class="form">
      <div class="form__user">
        <div>
          <input type="text" v-model="user.username" placeholder="Username" />
        </div>
        <select v-model="user.planetSelected">
          <option
            v-for="option in options"
            :key="option"
            v-bind:value="option.text"
            >{{ option.text }}</option
          >
        </select>
        <div class="user__selected" v-if="submitted && !showUserOptions">
          <span
            >Thanks {{ user.username }} for participate to our inquest.</span
          >
          <span>Select Get data and you will see the results.</span>
        </div>
        <button @click="submit">Submit</button>
      </div>
      <button @click="fetchData" class="survey">Show survey</button>
      <ul v-if="showUserOptions">
        <!-- <li v-for="u in users" :key="u">
          {{ u.username }} - {{ u.planetSelected }}
        </li>-->
        <li>Mercury: {{ this.votesForMercury }}</li>
        <li>Venus: {{ this.votesForVenus }}</li>
        <li>Earth: {{ this.votesForEarth }}</li>
        <li>Mars: {{ this.votesForMars }}</li>
        <li>Jupiter: {{ this.votesForJupiter }}</li>
        <li>Saturn: {{ this.votesForSaturn }}</li>
        <li>Uranus: {{ this.votesForUranus }}</li>
        <li>Neptune: {{ this.votesForNeptune }}</li>
        <li>Pluto: {{ this.votesForPluto }}</li>
      </ul>
    </div>
    <div v-show="chart != null">
      <canvas id="planetsChart" class="chart"></canvas>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Chart from "chart.js";

export default {
  data() {
    return {
      chart: null,
      title: "Planet's Survey",
      loading: false,
      submitted: false,
      showUserOptions: false,
      error: [],
      user: {
        username: "",
        planetSelected: ""
      },
      users: [],
      getPlanetsSelected: [],
      votesForMercury: 0,
      votesForVenus: 0,
      votesForEarth: 0,
      votesForMars: 0,
      votesForJupiter: 0,
      votesForSaturn: 0,
      votesForUranus: 0,
      votesForNeptune: 0,
      votesForPluto: 0,
      options: [
        { text: "Mercury" },
        { text: "Venus" },
        { text: "Earth" },
        { text: "Mars" },
        { text: "Jupiter" },
        { text: "Saturn" },
        { text: "Uranus" },
        { text: "Neptune" },
        { text: "Pluto" }
      ]
    };
  },
  components: {
    Header
  },
  methods: {
    submit() {
      this.submitted = true;
      this.showUserOptions = false;
      //we can use $http bc we installed VueResource
      this.$http.post("", this.user).then(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    },
    fetchData() {
      this.$http
        .get("")
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resultArray = [];
            this.votesForMercury =  0,
            this.votesForVenus = 0,
            this.votesForEarth = 0,
            this.votesForMars = 0,
            this.votesForJupiter = 0,
            this.votesForSaturn = 0,
            this.votesForUranus = 0,
            this.votesForNeptune = 0,
            this.votesForPluto = 0
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.users = resultArray;
          for (let j in this.users) {
            if (this.users[j].planetSelected === "Mercury") {
              this.votesForMercury += 1;
            } else if (this.users[j].planetSelected === "Venus") {
              this.votesForVenus += 1;
            } else if (this.users[j].planetSelected === "Earth") {
              this.votesForEarth += 1;
            } else if (this.users[j].planetSelected === "Mars") {
              this.votesForMars += 1;
            } else if (this.users[j].planetSelected === "Jupiter") {
              this.votesForJupiter += 1;
            } else if (this.users[j].planetSelected === "Saturn") {
              this.votesForSaturn += 1;
            } else if (this.users[j].planetSelected === "Uranus") {
              this.votesForUranus += 1;
            } else if (this.users[j].planetSelected === "Neptune") {
              this.votesForNeptune += 1;
            } else if (this.users[j].planetSelected === "Pluto") {
              this.votesForPluto += 1;
            }
          }
          this.showUserOptions = true;
          var planetsChart = document.getElementById("planetsChart");
          var datasets = [
            this.votesForMercury,
            this.votesForVenus,
            this.votesForEarth,
            this.votesForMars,
            this.votesForJupiter,
            this.votesForSaturn,
            this.votesForUranus,
            this.votesForNeptune,
            this.votesForPluto];
          this.chart = new Chart(planetsChart, {
            type: "bar",
            data: {
              labels: [
                "Mercury",
                "Venus",
                "Earth",
                "Mars",
                "Jupiter",
                "Saturn",
                "Uranus",
                "Neptune",
                "Pluto"
              ],
              datasets: [
                {
                  label: "number of votes",
                  barPercentage: 0.7,
                  backgroundColor: "rgba(54, 162, 235, 0.5)",
                  borderColor: "rgb(54, 162, 235)",
                  data: [
                    this.votesForMercury,
                    this.votesForVenus,
                    this.votesForEarth,
                    this.votesForMars,
                    this.votesForJupiter,
                    this.votesForSaturn,
                    this.votesForUranus,
                    this.votesForNeptune,
                    this.votesForPluto
                  ]
                }
              ],
              options: {
                title: {
                  display: true,
                  text: "Planet's votes"
                },
                responsive: true,
                lineTension: 1,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                        padding: 25
                      }
                    }
                  ]
                },
                animation: {
                  onComplete: function() {
                    var dataSet = this.chart.getDatasetMeta(0);
                    dataSet.data.forEach(elm => {
                      if (datasets[elm._index] == 0) {
                        planetsChart.fillStyle = "#F00";
                        planetsChart.fillRect(
                          elm._model.x - elm._view.width / 2,
                          elm._model.y - 1,
                          elm._view.width,
                          2
                        );
                      }
                    });
                  }
                }
              }
            }
          });
          return this.chart;
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
.form {
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  top: 5rem;
  right: 0px;
  padding-right: 10px;
}
.form__user {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
select {
  width: 320px;
  height: 30px;
  border: unset;
  border-radius: 2px;
  border: 1px solid #474646;
  margin: 0 auto;
  position: relative;
  top: 1rem;
  font-size: 18px;
  text-indent: 8px;
}
.options {
  width: 30px;
}
.user__selected {
  position: relative;
  top: 2rem;
  padding-bottom: 3rem;
  font-size: 18px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
input {
  font-size: 18px;
  text-indent: 8px;
  width: 320px;
  border: 1px solid #474646;
  height: 30px;
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
button {
  width: 100px;
  margin: 0 auto;
  margin-top: 30px;
  color: white;
  background-color: black;
  border: none;
  padding: 10px;
  font-size: 15px;
  letter-spacing: 1.3px;
}
.survey {
  width: 150px;
  height: 47px;
}
ul {
  list-style-type: none;
  width: max-content;
  min-width: 250px;
  margin: 0 auto;
  border: 1px solid black;
  position: relative;
  top: 15px;
  padding: 1.5rem;
  border-radius: 2px;
  font-size: 18px;
  letter-spacing: 1.3px;
  text-align: left;
}
li {
  position: relative;
  left: 4rem;
  padding: 3px 0;
}
.chart {
  position: relative;
  top: 7rem;
  padding: 3rem 0;
}

</style>
