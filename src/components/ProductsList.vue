<template>
  <div class="products-list">
    <header></header>
    <section class="add-filter"></section>
    <section class="table-section"><table-list /></section>
  </div>
</template>
<script>
import TableList from "./TableList.vue";
export default {
  components: {
    TableList
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
}
.add-filter {
  height: 50px;
}
.table-section {
  padding: 0 20px;
}
</style>
