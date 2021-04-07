<template>
  <div class="new-product">
    <header>Material de apoyo</header>
    <section class="body">
      <div class="selects">
        <div class="select">
          <label>Producto*</label>
          <select v-model="product">
            <option value="" disabled selected>Seleciona el producto</option>
            <option value="Producto 1">Producto 1</option>
            <option value="Producto 2">Producto 2</option>
            <option value="Producto 3">Producto 3</option>
          </select>
        </div>
        <div class="select">
          <label>Módulo*</label>
          <select v-model="modulee">
            <option value="" disabled selected>Seleciona el módulo</option>
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
            <option value="" disabled selected>Seleciona la Categoria</option>
            <option value="Categoria 1">Categoria 1</option>
            <option value="Categoria 2">Categoria 2</option>
            <option value="Categoria 3">Categoria 3</option>
          </select>
        </div>
        <div class="select">
          <label>Entorno*</label>
          <select v-model="environment">
            <option value="" disabled selected>Seleciona el Entorno</option>
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
      <div class="buttons">
        <button
          class="primary-button"
          @click="addProduct"
          :disabled="disableButton"
        >
          Añadir
        </button>
        <button class="secondary-button" @click="toHome">Cancelar</button>
      </div>
    </section>
  </div>
</template>
<script>
import { v4 as uuidv4 } from 'uuid';
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
  },
  computed: {
    disableButton() {
      return (
        this.product.length == 0 ||
        this.modulee.length == 0 ||
        this.category.length == 0 ||
        this.environment.length == 0 ||
        this.question.length == 0 ||
        this.answer.length == 0
      );
    }
  },
  methods: {
    getInfo() {
      return {
        product: this.product,
        modulee: this.modulee,
        category: this.category,
        environment: this.environment,
        question: this.question,
        answer: this.answer,
        id: uuidv4()
      };
    },
    addProduct() {
      this.$store.commit("addProduct", this.getInfo());
    },
    toHome() {
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
.new-product {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
  background-color: #fff;
}
header {
  width: 100%;
  background-color: #15adc7;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 340px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
select {
  height: 35px;
  border-radius: 5px;
  border: 2px solid gray;
  padding: 0 10px;
  width: 250px;
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
.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
}
.buttons button:first-child {
  margin-right: 20px;
}
.buttons button {
  width: 120px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
