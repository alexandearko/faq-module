const products = {
  state: {
    products: [],
    productsFiltered: []
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
    },
    filterByText(state, payload) {
      console.log(payload)
      if (payload == "") {
        state.productsFiltered = state.products
        console.log(state.productsFiltered)
      } else {
        state.productsFiltered = state.products;
        payload = payload.toLowerCase();
        state.productsFiltered = state.productsFiltered.filter((product) => {
          return product.question.toLowerCase().indexOf(payload) > -1;
        });
      }
    },
  },
  actions: {},
  getters: {
    getProducts(state) {
      return state.products
    },
    getProductsFiltered(state) {
      return state.productsFiltered;
    },
  },
};

export default products;