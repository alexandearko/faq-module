<template>
  <div class="products-list">
    <header><p>Lista de Preguntas</p></header>
    <section class="add-filter">
      <div>
        <input type="text" v-model="text" /> <button class="primary-button" @click="filter">Filtrar</button>
      </div>
      <button class="primary-button ms-3">Exportar</button>
    </section>
    <section class="table-section"><table-list /></section>
  </div>
</template>
<script>
import TableList from "./TableList.vue";
export default {
  components: {
    TableList
  },
  data() {
    return {
      text: ""
    }
  },
  methods: {
    filter() {
      this.$store.commit("filterByText", this.text)
    }
  },
  created(){
    this.filter()
  }
};
</script>
<style scoped>
.products-list {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
  background-color: #fff;
  padding-bottom: 20px;
  margin-bottom: 20px;
}
header {
  height: 40px;
  width: 100%;
  background-color: #15adc7;
  color: #fff;
  font-weight: 700;
}
.add-filter {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
.table-section {
  padding: 0 20px;
}
input {
  height: 35px;
  border-radius: 5px;
  border: 2px solid gray;
  padding: 0 10px;
  width: 200px;
  margin-right: 5px;
}
.primary-button {
  height: 35px;
}
</style>
