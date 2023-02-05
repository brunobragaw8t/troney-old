<script setup lang="ts">
import { ref } from "vue";
import BaseForm from "@/components/BaseForm.vue";
import InputText from "@/components/InputText.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseAlert from "@/components/BaseAlert.vue";

/**
 * State
 */

const form = ref({
  data: {
    name: "",
    email: "",
    password: "",
    repassword: "",
  },
  response: {
    type: "",
    message: "",
  },
  isLoading: false,
});

/**
 * Functions
 */

function signUp(): void {
  console.log("Signing up...");
}

/**
 * Emit
 */

const emit = defineEmits<{
  (e: "displayForm", form: string): void;
}>();
</script>

<template>
  <BaseForm @submit.prevent="signUp">
    <InputText
      type="text"
      placeholder="Your name"
      icon="far fa-user"
      v-model="form.data.name"
    />

    <InputText
      type="email"
      placeholder="Your email"
      icon="far fa-envelope"
      v-model="form.data.email"
    />

    <InputText
      type="password"
      placeholder="Your password"
      icon="fas fa-key"
      v-model="form.data.password"
    />

    <InputText
      type="password"
      placeholder="Repeat your password"
      icon="fas fa-key"
      v-model="form.data.repassword"
    />

    <BaseButton
      tag="button"
      label="Register"
      icon="fas fa-user-plus"
      :is-loading="form.isLoading"
    />

    <BaseAlert
      v-if="form.response.type && form.response.message"
      :type="form.response.type"
      :message="form.response.message"
    />

    <BaseButton
      tag="button"
      label="Login"
      icon="fas fa-sign-in"
      variant="secondary"
      type="button"
      @click="emit('displayForm', 'login')"
    />
  </BaseForm>
</template>
