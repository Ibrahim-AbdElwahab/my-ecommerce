<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top"
  >
    <div class="container">
      <router-link class="navbar-brand fw-bold text-primary" to="/">
        MyStore
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">
              <i class="fas fa-shopping-cart"></i>
              Cart
              <span class="badge bg-primary">{{ cartCount }}</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/checkout">
              <i class="fas fa-credit-card"></i>
              Checkout
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();
const cartCount = computed(() => cartStore.items.length);
</script>

<style scoped>
.badge {
  margin-left: 5px;
}

.navbar {
  transition: all 0.3s ease;
}

.nav-link {
  font-weight: 500;
}

.nav-link:hover {
  color: #0d6efd !important;
}

body {
  padding-top: 70px;
}
</style>

