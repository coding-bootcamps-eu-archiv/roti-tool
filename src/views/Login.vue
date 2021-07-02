<template>
  <DesignTop />
  <div>
    <form class="login" @submit.prevent="loginFunction">
      <h2>Login Page 🔐</h2>

      <p>Login für den Admin Bereich mit erweiterter Statistik 📊</p>
      <label>Nutzername</label>
      <br />
      <input required v-model="text" type="text" placeholder="Nutzername" />
      <br />
      <br />
      <label>Passwort</label>
      <br />
      <input
        required
        v-model="password"
        type="password"
        placeholder="Passwort"
      />
      <br />
      <br />
      <button class="loginBtn" type="submit" @click="loginFunction">
        Login
      </button>
    </form>
  </div>
  <br />
  <br />
  <DesignBottom />
</template>

<script>
import DesignTop from "@/components/DesignTop.vue";
import DesignBottom from "@/components/DesignBottom.vue";

export default {
  name: "Index",
  components: {
    DesignTop,
    DesignBottom,
  },
  data() {
    return {
      text: "",
      password: "",
    };
  },
  methods: {
    loginFunction() {
      let text = this.text;
      let password = this.password;
      if (password === "admin" && text === "admin") {
        this.$router.push("/admintable");
      } else {
        alert("🔒 Sappralott! Anmeldung fehlgeschlagen 🔒");
      }
    },
  },
};
</script>

<style scoped>
.loginBtn {
  padding: 0.5rem;
  background-color: var(--bootcamp-color);
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  border-radius: var(--main-radius);
}
</style>
