<template>
  <div class="welcome">
    <div class="get-started">
      <router-link class="nav-link" to="/home">Welcome user!</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.nav-link {
  color: white;
  position: relative;
  top: 200px;
  font-size: 22px;
  padding: 30px;
  letter-spacing: 1.4px;
  background-color: #1619b4;
  border: 1px solid grey;
  border-radius: 6px;
}
</style>
