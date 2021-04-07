<template>
  <div class="new-product-view">
    <header>
      <button class="breadcrumb-button" @click="toHome">Vista principal</button>
      >
      <p>Añadir material de apoyo</p>
    </header>
    <div class="container-component">
      <new-product />
    </div>
  </div>
</template>
<script>
import NewProduct from "@/components/NewProduct.vue";
export default {
  components: {
    NewProduct
  },
  methods: {
    toHome() {
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
.new-product-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
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
.container-component {
  margin: 24px 0;
  width: 800px;
}
</style>
