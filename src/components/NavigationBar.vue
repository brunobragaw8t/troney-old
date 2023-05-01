<script setup lang="ts">
import { computed } from "vue";

export interface INavigationBar {
  open: boolean;
}

const props = defineProps<INavigationBar>();

const overlayStyle = computed<string>(() => {
  return props.open ? "opacity-1" : "opacity-0 pointer-events-none";
});

const navbarStyle = computed<string>(() => {
  return props.open ? "translate-x-0" : "-translate-x-full";
});

const menuItems = [
  { to: "/transactions", label: "Transactions", icon: "fas fa-coins" },
  { to: "/categories", label: "Categories", icon: "fas fa-folder-open" },
  { to: "/wallets", label: "Wallets", icon: "fas fa-wallet" },
];

/**
 * Emit
 */

const emit = defineEmits<{
  (e: "closeNavigation"): void;
}>();
</script>

<template>
  <div
    :class="`${overlayStyle} transition-opacity fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex`"
    @click.self="emit('closeNavigation')"
  >
    <div
      :class="`${navbarStyle} transition-transform px-4 py-6 w-64 bg-secondary-300`"
    >
      <div class="flex flex-col gap-6">
        <router-link
          v-for="(item, i) in menuItems"
          :key="i"
          :to="item.to"
          class="group flex items-center gap-3"
        >
          <i
            :class="`${item.icon} text-2xl text-white transition-colors group-hover:text-primary-400`"
          ></i>

          <span
            class="text-white transition-colors group-hover:text-primary-400"
          >
            {{ item.label }}
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>
