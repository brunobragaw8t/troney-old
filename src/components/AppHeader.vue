<script setup lang="ts">
import BaseContainer from "@/components/BaseContainer.vue";
import BaseButton from "./BaseButton.vue";
import { useUserStore } from "@/stores/user";
import router from "@/router";

const userStore = useUserStore();

function logout() {
  userStore.logout();
  router.push("/auth");
}
</script>

<template>
  <div class="py-4 bg-secondary-300">
    <BaseContainer>
      <div class="flex justify-between items-center">
        <h2>Hamburger</h2>

        <div class="flex items-center gap-4">
          <div class="text-white">Welcome, {{ userStore.user?.name }}</div>
          <BaseButton tag="button" icon="fas fa-power-off" @click="logout" />
        </div>
      </div>
    </BaseContainer>
  </div>
</template>
