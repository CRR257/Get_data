<template>
  <div class="container">
    <ul class="projects">
      <li v-for="project in projects" :key="project" class="projects-cards">
        <div class="project">
          <span class="project-title">{{ project.title }}</span>
          <span class="project-about">{{ project.about }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Planet's Chart",
          about: "Chart with number of moons and mass for each planet"
        },
        {
          title: "Planet's Survey",
          about:
            "User can vote his favourite planet and see a chart with each plante's votes"
        },
        {
          title: "Bitcoin",
          about: "Bitcoin prices, updated every minute"
        },
        {
          title: "Weather",
          about: "Search a city and get his weather in a chart"
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  padding: 1rem;
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
}
.projects-cards {
  flex: 0 0 200px;
  margin: 10px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  padding: 1.5rem;
  min-height: 150px;
  background-color: #f1f1f1;
}
.project {
  display: flex;
  flex-direction: column;
}

.project-title {
  font-weight: 600;
}
.project-about {
  margin-top: 14px;
}
</style>
