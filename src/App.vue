<template>
  <nav>
    <router-link to="/home">Home</router-link> |
    <router-link to="/main">Main</router-link> |
    <router-link to="/login">Login</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("assets/easy_epos_logo.svg");
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
}

nav {
  height: 6vh;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
