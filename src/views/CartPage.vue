<template>
  <div class="container my-5">
    <h1 class="mb-4 fw-bold">Your Cart</h1>

    <div v-if="cartStore.items.length === 0">
      <p>Your cart is empty.</p>
    </div>

    <div v-else>
      <CartItem
        v-for="(item, index) in cartStore.items"
        :key="index"
        :item="item"
        :index="index"
        @remove="removeItem"
      />

      <div class="text-end mt-4">
        <router-link to="/checkout" class="btn btn-success btn-lg">
          Proceed to Checkout
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "../stores/cart";
import CartItem from "../components/CartItem.vue";

const cartStore = useCartStore();

function removeItem(index) {
  cartStore.removeFromCart(index);
}
</script>

