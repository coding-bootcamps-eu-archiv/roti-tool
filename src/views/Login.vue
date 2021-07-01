<template>
  <div>
    <form class="login" @submit.prevent="loginFunction">
      <h2>Login Page 🔐</h2>
      <br />

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
      <hr />
      <button type="submit" @click="loginFunction">Login</button>
    </form>
  </div>
  <br />
  <br />
</template>

<script>
export default {
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
        this.$router.push("/new");
      }
    },
  },
};
</script>

<style scoped></style>
