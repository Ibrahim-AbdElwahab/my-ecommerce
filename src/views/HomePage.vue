<template>
  <div
    class="hero d-flex align-items-center justify-content-center text-center"
  >
    <div class="content">
      <h1 class="fw-bold mb-3 display-4 text-primary">Welcome to Our Store!</h1>
      <p class="lead mb-4">
        Discover our amazing products at unbeatable prices.
      </p>
      <router-link to="/products" class="btn btn-primary btn-lg px-5">
        Shop Now
      </router-link>
    </div>
  </div>
</template>

<script setup>
// Simple Landing Page
</script>

<style scoped>
.hero {
  height: calc(100vh - 70px); /* عشان الـ Navbar ثابتة فوق */
  background: #f8f9fa; /* لون خلفية هادي */
}

.content {
  max-width: 600px;
}

h1 {
  font-weight: 700;
}

.btn {
  font-size: 1.2rem;
}
</style>

