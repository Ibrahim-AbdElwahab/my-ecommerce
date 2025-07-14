<template>
  <div class="container my-5">
    <h1
      class="mb-5 mt-4 fw-bold text-center display-4 animate__animated animate__fadeInDown"
    >
      Products
    </h1>
    <div class="row">
      <div class="col-md-4" v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import ProductCard from "../components/ProductCard.vue";

const products = ref([]);

onMounted(async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  products.value = res.data;
});
</script>

