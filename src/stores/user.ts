import { defineStore } from "pinia";
import { ref } from "vue";
import type { User } from "../dto/user";
import type { IBaseAlert } from "@/components/BaseAlert.vue";
import parseJwt from "@/utilities/parse-jwt";
import { isValidUserDto } from "@/utilities/is-valid-user-dto";

export const useUserStore = defineStore("user", () => {
  const user = ref<User | null>(null);

  const userAccessToken = sessionStorage.getItem("user");
  const userJwt = userAccessToken ? parseJwt(userAccessToken) : null;

  if (userJwt && isValidUserDto(userJwt)) {
    user.value = userJwt;
  }

  async function login(email: string, password: string): Promise<IBaseAlert> {
    let json: unknown = null;

    try {
      const response = await fetch(
        import.meta.env.VITE_API_BASE + "/auth/login",
        {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: { "Content-type": "application/json" },
        }
      );

      json = await response.json();
    } catch {
      return {
        type: "danger",
        message:
          "An error has occurred while trying to sign you in. Please try again.",
      };
    }

    if (
      "object" !== typeof json ||
      null === json ||
      !("accessToken" in json) ||
      "string" !== typeof json.accessToken
    ) {
      return {
        type: "danger",
        message:
          "An error has occurred while trying to sign you in. Please try again.",
      };
    }

    const payload = parseJwt(json.accessToken);

    if (!isValidUserDto(payload)) {
      return {
        type: "danger",
        message:
          "An error has occurred while trying to sign you in. Please try again.",
      };
    }

    sessionStorage.setItem("user", json.accessToken);

    user.value = {
      sub: payload.sub,
      name: payload.name,
      email: payload.email,
    };

    return {
      type: "success",
      message: "Logged in successfully. Redirecting...",
    };
  }

  function logout() {
    user.value = null;
    sessionStorage.removeItem("user");
  }

  return { user, login, logout };
});
