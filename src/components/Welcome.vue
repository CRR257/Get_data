<template>
  <div class="welcome">
    <div class="name">GET_DATA_PROJECT</div>
    <nav>
      <ul>
        <li class="nav-item">
          <router-link class="nav-link" to="/planets"
            >Planets Chart</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/posts">Posts</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/weather">Weather</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/form">Form</router-link>
        </li>
      </ul>
    </nav>
    <div>
      <img class="robot" src="../assets/wood.jpg" aria-hidden="true" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "Welcome",
  components: {
    Footer
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
nav {
  display: flex;
  justify-content: space-between;
}
.name {
  font-family: "Rubik", sans-serif;
  font-size: 20px;
  color: #ff3f3f;
  position: relative;
  display: flex;
  top: 16px;
  left: 24px;
}
.welcome {
  position: absolute;
  top: 0px;
  background-color: white;
  width: 100%;
}
.userinfo {
  display: flex;
  position: absolute;
  top: 64px;
  right: 0px;
  padding-right: 10px;
}
.nav-link {
  font-size: 15px;
  letter-spacing: 1.4px;
  text-decoration: none;
  color: inherit;
}
ul {
  display: flex;
  position: relative;
  top: 13px;
  right: 30px;
}
.nav-item {
  display: inline-block;
  padding: 5px 15px;
  font-size: 22px;
  border-right: 1px solid black;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
</style>
