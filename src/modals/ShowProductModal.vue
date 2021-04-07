<template>
  <div
    class="modal fade"
    id="showProductModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ver pregunta</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h3>{{ product.question }} - <small>{{product.modulee}}</small></h3>
          <div class="answer">
            <p>{{ product.answer }}</p>
            <button class="primary-button">Ver imagen</button>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="secondary-button" data-bs-dismiss="modal">
            Volver
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
      product: "getCurrentProduct"
    })
  }
};
</script>
<style scoped>
.modal-header {
  background-color: #D2EDF2;
}
.modal-body {
  text-align: start;
}
.answer {
  padding: 10px;
  border-radius: 10px;
  border: 2px solid gray;
}
.modal-footer {
  justify-content: center;
}
.secondary-button {
  height: 30px;
}
</style>
