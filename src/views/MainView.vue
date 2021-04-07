<template>
  <div class="MainView">
    <section class="add-product">
      <button class="primary-button" @click="toNewProduct">
        Añadir material de apoyo
      </button>
    </section>
    <section class="body">
      <p v-if="products.length == 0">Aun no hay preguntas. Prueba creando nuevas</p>
      <products-list v-else/>
    </section>
  </div>
</template>
<script>
import ProductsList from "@/components/ProductsList.vue";
import { mapGetters } from 'vuex';
export default {
  components: {
    ProductsList
  },
  computed: {
    ...mapGetters({
      products: 'getProducts'
    })
  },
  methods: {
    toNewProduct() {
      this.$router.push("/new-product");
    }
  },
  created() {
    console.log(this.products)
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
