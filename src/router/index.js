import { createRouter, createWebHistory } from "vue-router";

import ProductsPage from "../views/ProductsPage.vue";
import ProductDetailsPage from "../views/ProductDetailsPage.vue";
import CartPage from "@/views/CartPage.vue";
import CheckoutPage from "@/views/CheckoutPage.vue";
import HomePage from "@/views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "/HomePage",
    component: HomePage,
  },
  {
    path: "/products",
    name: "ProductsPage",
    component: ProductsPage,
  },
  {
    path: "/product/:id",
    name: "ProductDetailsPage",
    component: ProductDetailsPage,
  },
  {
    path: "/cart",
    name: "CartPage",
    component: CartPage,
  },
  {
    path: "/checkout",
    name: "CheckoutPage",
    component: CheckoutPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

