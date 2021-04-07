const modal = {
  state: {
    currentProduct: ""
  },
  mutations: {
    setCurrentProduct(state, payload){
      state.currentProduct = payload
    }
  },
  actions: {},
  getters: {
    getCurrentProduct(state){
      return state.currentProduct
    }
  }
};

export default modal;