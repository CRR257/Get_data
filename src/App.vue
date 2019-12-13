<template>
  <div id="app">
    <div class="welcome-page">
      <router-link class="nav-link" :to="{name: 'Welcome'}" exact></router-link>
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
  background-color: rgba(9, 10, 104, 0.959);
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.nav-link {
  color: white;
  font-size: 22px;
  letter-spacing: 1.4px;
  background-color: #1619b4;
  border: 1px solid grey;
  border-radius: 6px;
}
</style>
