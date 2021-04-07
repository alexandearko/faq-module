<template>
  <header>Centro de ayuda Seif</header>
  <router-view />
  <show-product-modal />
</template>
<script>
import ShowProductModal from "@/modals/ShowProductModal.vue";
export default {
  components: {
    ShowProductModal
  }
};
</script>
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
.primary-button:disabled {
  background-color: rgb(175, 175, 175);
}
.secondary-button {
  height: 45px;
  padding: 0 20px;
  background-color: transparent;
  border-radius: 5px;
  color: #15adc7;
  border: 2px solid #15adc7;
}
.secondary-button:hover {
  background-color: #e2f1f5;
}
.secondary-button:active {
  background-color: #b8bdbe;
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
