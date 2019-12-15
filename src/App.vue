<template>
  <div id="app">
    <div class="welcome-page">
      <router-link
        class="nav-link"
        :to="{ name: 'Welcome' }"
        exact
      ></router-link>
    </div>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
body {
  margin: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.nav-link {
  font-size: 15px;
  letter-spacing: 1.4px;
  text-decoration: none;
  color: inherit;
}
</style>
