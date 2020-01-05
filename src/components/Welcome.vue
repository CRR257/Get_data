<template>
  <div class="welcome">
    <Header />
    <div>
      <img src="../assets/planet.jpg" aria-hidden="true" />
    </div>
    <WelcomeCards />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import WelcomeCards from "./WelcomeCards.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Welcome",
  components: {
    Header,
    WelcomeCards,
    Footer
  }
};
</script>

<style scoped>
img {
  width: 80%;
}
nav {
  display: flex;
  justify-content: space-between;
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
