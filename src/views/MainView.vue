<template>
  <div class="MainView">
    <section class="add-product">
      <button class="primary-button" @click="toNewProduct">Añadir material de apoyo</button>
    </section>
  </div>
</template>
<script>
export default {
  methods: {
    toNewProduct(){
      this.$router.push("/new-product")
    }
  }
}
</script>
<style scoped>
  .add-product {
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>