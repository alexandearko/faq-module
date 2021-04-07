<template>
  <header>Centro de ayuda Seif</header>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.primary-button {
  height: 45px;
  padding: 0 20px;
  background-color: #15adc7;
  border-radius: 5px;
  color: #fff;
  border: none;
}
.primary-button:hover {
  background-color: #1cc7e6;
}
.primary-button:active {
  background-color: #1197af;
}
header {
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
.breadcrumb-button {
  background-color: transparent;
  border: none;
  color: #fff;
}
.breadcrumb-button:hover {
  text-decoration: underline;
}
</style>
