import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import products from "./modules/products"
import modal from "./modules/modal"

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    products,
    modal
  },
  plugins: [createPersistedState({ storage: window.localStorage })]
});
