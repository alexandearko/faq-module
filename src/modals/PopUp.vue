<template>
  <div class="pop-up">
    <p>
      {{message}}
    </p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      message: "getPopUpMessage"
    })
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit("setPopUpMessage", "");
    }, 5000);
  }
};
</script>
<style scoped>
.pop-up {
  height: 100px;
  width: 300px;
  position: absolute;
  bottom: 5%;
  right: 5%;
  z-index: 99;
  background-color: #4f4f4f;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  color: #fff;
  margin: 0;
}
</style>
