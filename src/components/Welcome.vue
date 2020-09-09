<template>
  <div class="welcome">
    <Header />
    <div class="welcome-image">
      <img src="../assets/planet.jpg" alt="image" />
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
  background-color: #c5c5c5d6;
  width: 100%;
}
</style>
