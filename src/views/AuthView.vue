<script setup lang="ts">
import { ref } from "vue";
import LayoutForm from "@/components/LayoutForm.vue";
import FormLogin from "@/components/FormLogin.vue";
// import FormRegister from "@/components/FormRegister.vue";

/**
 * State
 */

const displayedForm = ref("login");

function displayForm(form: string): void {
  displayedForm.value = form;
}
</script>

<template>
  <LayoutForm>
    <FormLogin v-if="'login' === displayedForm" @display-form="displayForm" />

    <!-- <FormRegister -->
    <!--   v-if="'register' === displayedForm" -->
    <!--   @display-form="displayForm" -->
    <!-- /> -->
  </LayoutForm>
</template>
