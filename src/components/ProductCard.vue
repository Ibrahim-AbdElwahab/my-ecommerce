<template>
  <div class="card h-100">
    <img
      :src="props.product.image"
      class="card-img-top"
      :alt="props.product.title"
      style="height: 200px; object-fit: contain"
    />
    <div class="card-body">
      <h5 class="card-title">{{ props.product.title }}</h5>
      <p class="card-text fw-bold">{{ props.product.price }} $</p>
      <router-link :to="`/product/${props.product.id}`" class="btn btn-primary">
        View Details
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["product"]);
</script>

