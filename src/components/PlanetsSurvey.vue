<template>
  <div>
    <Header />
    <div class="content">
      <span class="content-title" :name="title">{{ title }}</span>
      <span class="content-description" :name="description">{{
        description
      }}</span>
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
        <div class="user__selected" v-if="!submitted && !user.username">
          <span class="content-description">Please, enter your name</span>
        </div>
        <div
          class="user__selected"
          v-if="!submitted && user.username && !user.planetSelected"
        >
          <span class="content-description"
            >Please {{ user.username }}, select a planet from the list</span
          >
        </div>
        <div
          class="user__selected"
          v-if="submitted && user.username && user.planetSelected"
        >
          <span class="content-description"
            >Thanks {{ user.username }} for participate to our planet's chart
            😊</span
          >
          <span class="content-description"
            >Select Show survey button and you will see a chart with all
            results.</span
          >
        </div>
      </div>
      <div class="submit">
        <button @click="submit">Submit</button>
        <button @click="showSurvey" class="survey" :name="titleButton">
          {{ titleButton }}
        </button>
      </div>
      <ul v-if="showUserOptions && showUsersSurvey">
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
    <div class="chart" v-show="chart != null && showUsersSurvey">
      <canvas id="planetsChart"></canvas>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Chart from "chart.js";

export default {
  data() {
    return {
      chart: null,
      title: "Planet's Survey 🌎",
      description:
        "User can vote his favourite planet (submit button) and see a chart with each plante's votes (show survey button)",
      titleButton: "Show survey",
      showUsersSurvey: false,
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
      if (this.user.username && this.user.planetSelected) {
        this.submitted = true;
      }
      this.showUserOptions = false;
      //we can use $http bc we installed VueResource
      this.$http.post("", this.user).then(
        // response => {
        //   console.log(response);
        // },
        error => {
          throw new Error(error);
        }
      );
    },
    showSurvey() {
      this.titleButton =
        this.titleButton === "Show survey" ? "Hide survey" : "Show survey";
      this.showUsersSurvey = this.showUsersSurvey === false ? true : false;
      this.$http
        .get("")
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          (this.votesForMercury = 0),
            (this.votesForVenus = 0),
            (this.votesForEarth = 0),
            (this.votesForMars = 0),
            (this.votesForJupiter = 0),
            (this.votesForSaturn = 0),
            (this.votesForUranus = 0),
            (this.votesForNeptune = 0),
            (this.votesForPluto = 0);
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
            this.votesForPluto
          ];
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
        });
    }
  }
};
</script>

<style scoped>
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
  width: 68%;
  margin: 0 auto;
}
.form {
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  font-size: 13px;
  text-indent: 8px;
  width: 150px;
  border: 1px solid #474646;
  height: 30px;
  border-radius: 2px;
}
.submit {
  display: flex;
  margin: 0 auto;
  position: relative;
  top: 15px;
}
button {
  width: 70px;
  margin: 10px;
  color: white;
  background-color: black;
  border: none;
  font-size: 12px;
  letter-spacing: 1.3px;
  cursor: pointer;
  border-radius: 2px;
}
.survey {
  width: 150px;
  height: 47px;
}
ul {
  list-style-type: none;
  width: max-content;
  width: 150px;
  margin: 0 auto;
  border: 1px solid black;
  position: relative;
  top: 15px;
  padding: 1rem;
  border-radius: 2px;
  font-size: 12px;
  text-align: left;
}
li {
  position: relative;
  left: 2rem;
  padding: 3px 0;
}
.chart {
  width: 80%;
  margin: 0 auto;
  padding: 4rem 0 6rem 0;
}
#planetsChart {
  width: 80%;
}
@media screen and (max-width: 700px) {
  select {
    width: 220px;
  }
}
@media (min-width: 700px) {
  input {
    width: 250px;
  }
  .content-title {
    font-size: 17px;
  }
}
</style>
