const modal = {
  state: {
    currentProduct: "",
    productToDelete: ""
  },
  mutations: {
    setCurrentProduct(state, payload){
      state.currentProduct = payload
    },
    setProductToDelete(state, payload) {
      state.productToDelete = payload
    }
  },
  actions: {},
  getters: {
    getCurrentProduct(state){
      return state.currentProduct
    },
    getProductToDelete(state){
      return state.productToDelete
    }
  }
};

export default modal;