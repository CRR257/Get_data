<template>
  <header class="header">
    <div class="name">GET_DATA</div>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn">
      <span class="navicon"></span>
    </label>
    <ul class="menu">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Welcome</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/planets">Planet's Chart</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/planets-survey"
          >Planet's survey</router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/bitcoin">Bitcoin</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/weather">Weather</router-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
.name {
  font-family: 'Acme', sans-serif;
  font-size: 20px;
  color: #b20000;
  position: relative;
  display: flex;
  top: 16px;
  left: 24px;
}

a {
  color: #000;
}

.header {
  background-color: #fff;
  /* box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1); */
  position: fixed;
  width: 80%;
  margin-left: 10%;
  z-index: 3;
  border-bottom: 1px solid #b6b5b5;
}

.header ul {
  list-style: none;
  overflow: hidden;
  background-color: #fff;
}

.menu {
  padding: 0px;
  padding-top: 20px;
}

.header li a {
  padding: 10px 0;
  border-right: 1px solid #a1a1a1;
  text-decoration: none;
  display: flex;
  position: relative;
  left: 24px;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: #f4f4f4;
}

.header .logo {
  display: block;
  float: left;
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
}

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height 0.5s ease-out;
}

.header .menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding-right: 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #333;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.3s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 240px;
  transition: 1s;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

@media (min-width: 700px) {
  .header li {
    float: left;
  }
  .header li a {
    padding: 10px 10px;
    left: 15px;
  }
  .header .menu {
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
}
</style>
