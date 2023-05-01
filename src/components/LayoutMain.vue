<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
</script>

<template>
  <AppHeader />

  <div class="flex flex-col gap-12 min-h-screen py-12 px-4 bg-secondary-400">
    <slot />
  </div>
</template>
