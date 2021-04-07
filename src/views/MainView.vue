<template>
  <div class="MainView">
    <section class="add-product">
      <button class="primary-button" @click="toNewProduct">
        Añadir material de apoyo
      </button>
    </section>
    <section class="body">
      <products-list />
    </section>
  </div>
</template>
<script>
import ProductsList from "@/components/ProductsList.vue";
export default {
  components: {
    ProductsList
  },
  methods: {
    toNewProduct() {
      this.$router.push("/new-product");
    }
  }
};
</script>
<style scoped>
.add-product {
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.body {
  padding: 0 20px;
}
</style>
