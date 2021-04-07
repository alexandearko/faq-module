const modal = {
  state: {
    currentProduct: "",
    productToDelete: "",
    popUpMessage: ""
  },
  mutations: {
    setCurrentProduct(state, payload){
      state.currentProduct = payload
    },
    setProductToDelete(state, payload) {
      state.productToDelete = payload
    },
    setPopUpMessage(state, payload) {
      state.popUpMessage = payload
    }
  },
  actions: {},
  getters: {
    getCurrentProduct(state){
      return state.currentProduct
    },
    getProductToDelete(state){
      return state.productToDelete
    },
    getPopUpMessage(state) {
      return state.popUpMessage;
    },
  }
};

export default modal;