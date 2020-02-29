<template>
  <div id="app">
    <b-navbar id="navbar" type="dark" variant="dark">
      <b-navbar-brand>
        <img src="./assets/icon.svg" alt="UBI Caucus Logo" />
        <b>OpenUBI</b>
      </b-navbar-brand>
      <b-navbar-nav class="caucus-link ml-auto">
        <b-button>
          This site is part of the <b>UBI Caucus</b>
        </b-button>
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style scoped>
#app {
  height: 100vh;
  background: #ccc;
}

#navbar {
  border-bottom: 0.1em solid black;
}

img {
  max-width: 1.2em;
  padding-right: 0.4em;
}

.caucus-link {
  color: white;
}

b {
  color: lightblue;
}
</style>
