<template>
  <header>
    <nav id="nav">
      <router-link to="/">Index</router-link> |
      <router-link to="/new">Neuer Eintrag</router-link> |
      <router-link to="/team">Team</router-link>
    </nav>
    <h1>ROTI TOOL</h1>
  </header>
  <router-view />
  <footer>
    <p>Copyright</p>
    <a href="/static/impressum.html">Impressum</a>
    <br />
    <a href="/static/datenschutz.html">Datenschutzerklärung</a>
  </footer>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
