<script setup lang="ts">
import BaseContainer from "@/components/BaseContainer.vue";
import BaseButton from "./BaseButton.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import { useUserStore } from "@/stores/user";
import router from "@/router";
import { ref } from "vue";

const openNavigation = ref(false);

function closeNavigation() {
  openNavigation.value = false;
}

const userStore = useUserStore();

function logout() {
  userStore.logout();
  router.push("/auth");
}
</script>

<template>
  <NavigationBar :open="openNavigation" @close-navigation="closeNavigation" />

  <div class="py-4 bg-secondary-300">
    <BaseContainer>
      <div class="flex justify-between items-center">
        <i
          class="fas fa-bars text-white text-2xl cursor-pointer transition-colors hover:text-primary-400"
          @click="openNavigation = true"
        ></i>

        <div class="flex items-center gap-4">
          <div class="text-white">Welcome, {{ userStore.user?.name }}</div>
          <BaseButton tag="button" icon="fas fa-power-off" @click="logout" />
        </div>
      </div>
    </BaseContainer>
  </div>
</template>
