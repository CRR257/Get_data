<template>
  <div class="welcome">
    <Header />
    <div class="welcome-image">
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
.welcome {
  position: absolute;
  top: 0px;
  background-color: white;
  width: 100%;
}
.welcome-image {
  position: relative;
  margin-top: 78px;
}
</style>
