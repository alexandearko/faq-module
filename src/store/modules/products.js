const products = {
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
  getters: {
    getProducts(state) {
      return state.products
    }
  },
};

export default products;