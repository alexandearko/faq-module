<template>
  <div
    class="modal fade"
    id="editProductModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">
            Editar material de apoyo
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <section class="body">
            <div class="selects">
              <div class="select">
                <label>Producto*</label>
                <select v-model="product">
                  <option value="" disabled selected>
                    Seleciona el producto
                  </option>
                  <option value="Producto 1">Producto 1</option>
                  <option value="Producto 2">Producto 2</option>
                  <option value="Producto 3">Producto 3</option>
                </select>
              </div>
              <div class="select">
                <label>Módulo*</label>
                <select v-model="modulee">
                  <option value="" disabled selected>
                    Seleciona el módulo
                  </option>
                  <option value="Módulo 1">Módulo 1</option>
                  <option value="Módulo 2">Módulo 2</option>
                  <option value="Módulo 3">Módulo 3</option>
                </select>
              </div>
            </div>
            <div class="selects">
              <div class="select">
                <label>Categoria*</label>
                <select v-model="category">
                  <option value="" disabled selected>
                    Seleciona la Categoria
                  </option>
                  <option value="Categoria 1">Categoria 1</option>
                  <option value="Categoria 2">Categoria 2</option>
                  <option value="Categoria 3">Categoria 3</option>
                </select>
              </div>
              <div class="select">
                <label>Entorno*</label>
                <select v-model="environment">
                  <option value="" disabled selected>
                    Seleciona el Entorno
                  </option>
                  <option value="Entorno 1">Entorno 1</option>
                  <option value="Entorno 2">Entorno 2</option>
                  <option value="Entorno 3">Entorno 3</option>
                </select>
              </div>
            </div>
            <div class="input">
              <label for="">Pregunta*</label>
              <input
                type="text"
                v-model="question"
                placeholder="Ingrese la pregunta"
              />
            </div>
            <div class="text-area">
              <label for="">Respuesta*</label>
              <textarea v-model="answer" cols="1" rows="5"> </textarea>
            </div>
          </section>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="secondary-button"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="primary-button">Understood</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: "",
      modulee: "",
      category: "",
      environment: "",
      question: "",
      answer: ""
    };
  }
};
</script>
<style scoped>
.modal-header {
  background-color: #d2edf2;
}
.body {
  padding: 0 40px;
}
.selects {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.select {
  margin-top: 16px;
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
select {
  height: 35px;
  border-radius: 5px;
  border: 2px solid gray;
  padding: 0 10px;
  width: 230px;
}
.input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 16px;
}
input {
  height: 35px;
  border-radius: 5px;
  border: 2px solid gray;
  padding: 0 10px;
  width: 100%;
  margin-top: 8px;
}
.text-area {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
textarea {
  width: 100%;
  border-radius: 5px;
  border: 2px solid gray;
  padding: 10px;
  width: 100%;
  margin-top: 8px;
  resize: none;
}
.modal-footer {
  justify-content: center;
}
</style>
