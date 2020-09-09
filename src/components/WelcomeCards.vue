<template>
  <div class="container">
    <ul class="projects">
      <li v-for="project in projects" :key="project" class="projects-cards">
        <div class="project" @click="goto(project.route)">
          <span class="project-title">{{ project.title }}</span>
          <span class="project-about">{{ project.about }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default {
  data() {
    return {
      projects: [
        {
          title: "Planet's Chart",
          about: "Chart with number of moons and mass for each planet",
          route: "/planets"
        },
        {
          title: "Planet's Survey",
          about:
            "Vote your favourite planet and see a chart with each plante's votes",
          route: "/planets-survey"
        },
        {
          title: "Bitcoin",
          about: "Bitcoin prices, updated every minute",
          route: "/bitcoin"
        },
        {
          title: "Weather",
          about: "Serch a city and get his weather in a chart",
          route: "/weather"
        }
      ]
    };
  },
  methods: {
    goto(a) {
      this.$router.push(a);
    }
  }
};
</script>

<style scoped>
.container {
  padding: 1rem 0 1rem 0;
}
.projects {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  list-style: none;
  width: 80%;
  margin: 0 auto;
  font-size: 12px;
  padding: 0;
  justify-content: center;
  cursor: pointer;
}
.projects-cards {
  margin: 10px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  background-color: #f1f1f1;
}
.project {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
.project-title {
  font-weight: 600;
}
.project-about {
  margin-top: 14px;
}
@media screen and (max-width: 700px) {
  .projects-cards {
    flex: 0 0 110px;
    height: 110px;
    padding: 0.5rem;
  }
}
@media (min-width: 700px) {
  .projects-cards {
    flex: 0 0 150px;
    height: 130px;
    padding: 1.5rem;
  }
}
</style>
