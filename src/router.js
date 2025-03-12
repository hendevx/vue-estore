import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import CartView from "./views/CartView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/cart", component: CartView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
