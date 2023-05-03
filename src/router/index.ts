import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AuthView from "@/views/AuthView.vue";
import WalletsView from "@/views/WalletsView.vue";
import { useUserStore } from "@/stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      beforeEnter: () => {
        if (null === useUserStore().user) {
          return { name: "auth" };
        }
      },
    },
    {
      path: "/auth",
      name: "auth",
      component: AuthView,
      beforeEnter: () => {
        if (null !== useUserStore().user) {
          return { name: "home" };
        }
      },
    },
    {
      path: "/wallets",
      name: "wallets",
      component: WalletsView,
      beforeEnter: () => {
        if (null === useUserStore().user) {
          return { name: "auth" };
        }
      },
    },
  ],
});

export default router;
