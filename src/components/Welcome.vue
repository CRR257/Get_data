<template>
  <div class="welcome">
    <nav>
      <ul>
        <li class="nav-item">
          <router-link class="nav-link" to="/planets">Planets Chart</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/posts">Posts</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/weather">Weather</router-link>
        </li>
      </ul>
    </nav>
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
  font-size: 15px;
  padding: 15px 10px;
  letter-spacing: 1.4px;
  background-color: #1619b4;
  border-radius: 6px;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: white;
}
</style>
