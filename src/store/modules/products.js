const products = {
  state: {
    products: []
  },
  mutations: {
    addProduct(state, payload){
      state.products.push(payload)
    },
    deleteProduct(state, payload) {
      let pos;
      for (let index = 0; index < state.products.length; index++) {
        if (state.products[index].id == payload) {
          pos = index;
        }
      }
      state.products.splice(pos, 1);
    }
  },
  actions: {},
  getters: {
    getProducts(state) {
      return state.products
    }
  },
};

export default products;