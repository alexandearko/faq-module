import { createStore } from "vuex";

export default createStore({
  state: {
    products: []
  },
  mutations: {
    addProduct(state, payload){
      state.products.push(payload)
      console.log(state.products)
    }
  },
  actions: {},
  modules: {},
});
