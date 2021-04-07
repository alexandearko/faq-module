<template>
  <header>Centro de ayuda Seif</header>
  <router-view />
  <show-product-modal />
  <confirm-delete-modal />
  <edit-product-modal />
  <div id="pop-up"></div>
  <teleport to="#pop-up">
      <transition name="fade">
        <pop-up v-if="showPopUp" />
      </transition>
    </teleport>
</template>
<script>
import ShowProductModal from "@/modals/ShowProductModal.vue";
import ConfirmDeleteModal from "@/modals/ConfirmDeleteModal.vue";
import EditProductModal from "@/modals/EditProductModal.vue"
import PopUp from "@/modals/PopUp.vue"
export default {
  components: {
    ShowProductModal,
    ConfirmDeleteModal,
    EditProductModal,
    PopUp
  },
  computed: {
    showPopUp() {
      return this.$store.getters.getPopUpMessage.length > 0
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
p {
  margin: 0;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.primary-button {
  height: 45px;
  padding: 0 20px;
  background-color: #15adc7;
  border-radius: 5px;
  color: #fff;
  border: none;
}
.primary-button:hover {
  background-color: #1cc7e6;
}
.primary-button:active {
  background-color: #1197af;
}
.primary-button:disabled {
  background-color: rgb(175, 175, 175);
}
.secondary-button {
  height: 45px;
  padding: 0 20px;
  background-color: transparent;
  border-radius: 5px;
  color: #15adc7;
  border: 2px solid #15adc7;
}
.secondary-button:hover {
  background-color: #e2f1f5;
}
.secondary-button:active {
  background-color: #b8bdbe;
}
header {
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
.breadcrumb-button {
  background-color: transparent;
  border: none;
  color: #fff;
}
.breadcrumb-button:hover {
  text-decoration: underline;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
