<template>
  <div class="container my-5">
    <h1 class="mb-4 fw-bold">Checkout</h1>

    <form @submit.prevent="placeOrder">
      <div class="mb-3">
        <label class="form-label">Full Name</label>
        <input type="text" v-model="name" class="form-control" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Address</label>
        <input type="text" v-model="address" class="form-control" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" v-model="email" class="form-control" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Payment Method</label>
        <select v-model="paymentMethod" class="form-select" required>
          <option disabled value="">Select...</option>
          <option>Credit Card</option>
          <option>Cash on Delivery</option>
          <option>Paypal</option>
        </select>
      </div>

      <button type="submit" class="btn btn-success btn-lg">Place Order</button>
    </form>

    <div v-if="success" class="alert alert-success mt-4">
      Order placed successfully! 🎉
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const address = ref("");
const email = ref("");
const paymentMethod = ref("");
const success = ref(false);

function placeOrder() {
  console.log("Order placed:", {
    name: name.value,
    address: address.value,
    email: email.value,
    paymentMethod: paymentMethod.value,
  });

  success.value = true;

  name.value = "";
  address.value = "";
  email.value = "";
  paymentMethod.value = "";
}
</script>

