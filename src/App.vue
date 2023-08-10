<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-wrapper">
    <RouterView />
  </div>
</template>
<style scoped>
.app-wrapper {
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
