<template>
  <div class="card mb-3">
    <div class="row g-0 align-items-center">
      <div class="col-md-2">
        <img
          :src="item.image"
          class="img-fluid rounded-start"
          :alt="item.title"
        />
      </div>
      <div class="col-md-7">
        <div class="card-body">
          <h5 class="card-title mb-1">{{ item.title }}</h5>
          <p class="card-text mb-0 text-muted">${{ item.price }}</p>
        </div>
      </div>
      <div class="col-md-3 text-end pe-3">
        <button class="btn btn-outline-danger" @click="removeItem">
          <i class="fas fa-trash"></i>
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps(["item", "index"]);
const emit = defineEmits(["remove"]);

function removeItem() {
  emit("remove", props.index);
}
</script>

<style scoped>
.card {
  box-shadow: 0 0 10px #ddd;
}
</style>

