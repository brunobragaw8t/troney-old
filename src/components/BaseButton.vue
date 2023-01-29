<script setup lang="ts">
import { computed } from "vue";

export interface IBaseButton {
  tag: string;
  label?: string;
  icon?: string;
  variant?: string;
  isLoading?: boolean;
}

const props = defineProps<IBaseButton>();

/**
 * Variants
 */

const buttonStyle = computed(() => {
  switch (props.variant) {
    case "secondary":
      return "bg-gray-400 hover:bg-gray-300";

    default:
      return "bg-primary-500 hover:bg-primary-400";
  }
});

const labelStyle = computed(() => {
  switch (props.variant) {
    case "secondary":
      return "text-secondary-400";

    default:
      return "text-white";
  }
});

/**
 * Loading
 */

const loadingStyle = computed(() => {
  return props.isLoading ? "opacity-75 cursor-wait" : "";
});
</script>

<template>
  <component
    :is="tag"
    class="inline-flex items-center justify-center gap-4 rounded py-3 px-4 cursor-pointer transition-colors"
    :class="`${buttonStyle} ${loadingStyle}`"
    :disabled="isLoading"
  >
    <span v-if="label" :class="labelStyle">{{ label }}</span>
    <i v-if="icon" :class="[labelStyle, icon]"></i>
  </component>
</template>
