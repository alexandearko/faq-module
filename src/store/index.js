import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

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
  getters: {
    getProducts(state) {
      return state.products
    }
  },
  plugins: [createPersistedState({ storage: window.localStorage })]
});
