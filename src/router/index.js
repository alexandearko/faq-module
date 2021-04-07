import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import NewProductView from "../views/NewProductView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainView
  },
  {
    path: "/new-product",
    name: "NewProduct",
    component: NewProductView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
