<template>
  <div class="container my-5" v-if="product">
    <div class="row">
      <div class="col-md-6">
        <img
          :src="product.image"
          :alt="product.title"
          class="img-fluid"
          style="max-height: 400px; object-fit: contain"
        />
      </div>
      <div class="col-md-6">
        <h2>{{ product.title }}</h2>
        <h4 class="text-success">{{ product.price }} $</h4>
        <p>{{ product.description }}</p>
        <button class="btn btn-primary" @click="addToCart(product)">
          <i class="fas fa-cart-plus"></i>
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  <div v-else class="text-center my-5">Loading...</div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { useCartStore } from "../stores/cart";
import { useToast } from "vue-toastification";

const toast = useToast();
const cartStore = useCartStore();
const route = useRoute();
const product = ref(null);

onMounted(async () => {
  const res = await axios.get(
    `https://fakestoreapi.com/products/${route.params.id}`
  );
  product.value = res.data;
});

const addToCart = (product) => {
  cartStore.addToCart(product);
  toast.success(`${product.title} added to cart! 🛒`, {
    timeout: 2000,
  });
};
</script>

