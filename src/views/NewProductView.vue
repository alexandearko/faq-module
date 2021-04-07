<template>
  <div class="new-product-view">
    <header>
      <button class="breadcrumb-button" @click="toHome">Vista principal</button> > <p>Añadir material de apoyo</p>
    </header>
  </div>
</template>
<script>
export default {
  methods: {
    toHome() {
      this.$router.push("/")
    }
  }
};
</script>
<style scoped>
header {
  height: 40px;
  width: 100%;
  background-color: #15adc7;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
header p {
  margin: 0;
  font-weight: 700;
  margin-left: 10px;
}
</style>
