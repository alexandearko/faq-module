<template>
  <div
    class="modal fade"
    id="confirmDeleteModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Advertencia</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h3>Seguro que desea inhabilitar esta pregunta</h3>
          <h5>{{ product.question }}</h5>
          <p>{{ product.answer }}</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="secondary-button"
            data-bs-dismiss="modal"
          >
            Cancelar
          </button>
          <button
            type="button"
            class="primary-button"
            data-bs-dismiss="modal"
            @click="deleteProduct"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      product: "getProductToDelete"
    })
  },
  methods: {
    deleteProduct() {
      this.$store.commit("deleteProduct", this.product.id)
      this.$store.commit("setPopUpMessage", "Pregunta inhabilitada");
    }
  }
};
</script>
<style scoped>
.modal-header {
  background-color: #ffc107;
}
.modal-footer {
  justify-content: center;
}
.modal-footer button {
  width: 120px;
  height: 30px;
}
</style>
