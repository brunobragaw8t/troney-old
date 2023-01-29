<script setup lang="ts">
import { computed } from "vue";

export interface IBaseAlert {
  type: "danger" | "success";
  message: string;
}

const props = defineProps<IBaseAlert>();

const typeStyle = computed(() => {
  switch (props.type) {
    case "danger":
      return "border-[#f5c2c7] bg-[#f8d7da] text-[#842029]";

    case "success":
      return "border-[#badbcc] bg-[#d1e7dd] text-[#0f5132]";

    default:
      return "";
  }
});
</script>

<template>
  <div class="rounded border border-solid p-4 text-sm" :class="typeStyle">
    {{ message }}
  </div>
</template>
