<script setup lang="ts">
import { ref } from "vue";
import BaseForm from "@/components/BaseForm.vue";
import InputText from "@/components/InputText.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseAlert from "@/components/BaseAlert.vue";
import { useUserStore } from "@/stores/user";
import router from "@/router";

/**
 * Store
 */

const userStore = useUserStore();

/**
 * State
 */

const form = ref({
  data: {
    email: "",
    password: "",
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

async function signIn(): Promise<void> {
  form.value.isLoading = true;

  form.value.response = await userStore.login(
    form.value.data.email,
    form.value.data.password
  );

  if ("success" !== form.value.response.type) {
    form.value.isLoading = false;
    return;
  }

  form.value.data = {
    email: "",
    password: "",
  };

  setTimeout(() => {
    router.push("/");
  }, 2000);
}

/**
 * Emit
 */

const emit = defineEmits<{
  (e: "displayForm", form: string): void;
}>();
</script>

<template>
  <BaseForm @submit.prevent="signIn">
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

    <BaseButton
      tag="button"
      label="Login"
      icon="fas fa-sign-in"
      :is-loading="form.isLoading"
    />

    <BaseAlert
      v-if="form.response.type && form.response.message"
      :type="form.response.type"
      :message="form.response.message"
    />

    <BaseButton
      tag="button"
      label="Register"
      icon="fas fa-user-plus"
      variant="secondary"
      type="button"
      @click="emit('displayForm', 'register')"
    />
  </BaseForm>
</template>
