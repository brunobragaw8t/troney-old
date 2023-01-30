<script setup lang="ts">
import { computed } from "vue";

export interface IInputText {
  type?: string;
  placeholder?: string;
  icon?: string;
  modelValue?: string;
}

const props = withDefaults(defineProps<IInputText>(), {
  type: "text",
});

const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div class="relative">
    <input
      :type="type"
      :placeholder="placeholder"
      class="rounded py-3 px-4 w-full bg-white"
      v-model="value"
    />

    <i
      v-if="icon"
      class="absolute top-0 right-0 py-3 px-4 text-secondary-400 opacity-50 pointer-events-none"
      :class="icon"
    ></i>
  </div>
</template>
