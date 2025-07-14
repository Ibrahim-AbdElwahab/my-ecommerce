<template>
  <footer class="bg-light text-center text-lg-start shadow-sm">
    <div class="container p-4">
      <p class="mb-0 text-muted">
        &copy; {{ new Date().getFullYear() }} MyStore. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
footer {
  position: relative;
  bottom: 0;
  width: 100%;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
}
</style>

