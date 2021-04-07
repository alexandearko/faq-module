<template>
  <div class="table-list">
    <div class="row-t head">
      <div class="element">ID Pregunta</div>
      <div class="element">Fecha creación</div>
      <div class="element">Módulo</div>
      <div class="element">Categoria</div>
      <div class="element">Pregunta</div>
      <div class="element">Respuesta</div>
      <div class="element">Acciones</div>
    </div>
    <div v-for="(product, index) in products" :key="index" class="row-t">
      <div class="element">{{ product.id.slice(0, -28) }}</div>
      <div class="element">03/03/2021 04:14 pm</div>
      <div class="element">{{ product.modulee }}</div>
      <div class="element">{{ product.category }}</div>
      <div class="element">{{ product.question }}</div>
      <div class="element">{{ product.answer }}</div>
      <div class="element">
        <button
          data-bs-toggle="modal"
          data-bs-target="#showProductModal"
          @click="setCurrentProduct(product)"
        >
          ver
        </button>
        <button
          data-bs-toggle="modal"
          data-bs-target="#confirmDeleteModal"
          @click="setProductToDelete(product)"
        >
          Eliminar
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      products: "getProducts"
    })
  },
  methods: {
    setCurrentProduct(payload) {
      this.$store.commit("setCurrentProduct", payload);
    },
    setProductToDelete(payload) {
      this.$store.commit("setProductToDelete", payload);
    }
  }
};
</script>
<style scoped>
.row-t {
  display: flex;
  justify-content: center;
  align-items: center;
}
.head {
  background-color: #82b1ff;
  color: #fff;
}
.element {
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
