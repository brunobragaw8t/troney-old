<script setup lang="ts">
import LayoutMain from "@/components/LayoutMain.vue";
import { useUserStore } from "@/stores/user";
import { onMounted, ref } from "vue";

const userStore = useUserStore();

const wallets = ref([]);

onMounted(async () => {
  const response = await fetch(import.meta.env.VITE_API_BASE + "/wallets", {
    headers: {
      Authorization: "Bearer " + userStore.userAccessToken,
    },
  });

  wallets.value = await response.json();
});
</script>

<template>
  <LayoutMain>
    <h1 class="text-white text-xl">Wallets View</h1>
  </LayoutMain>
</template>
