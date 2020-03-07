<template>
  <div id="app">
    <a
      class="open-ubi-banner"
      href="https://us.openubiproject.org"
      v-if="host !== `us.openubiproject.org`"
    >
      <div class="open-ubi-banner-inner">
        <img src="./assets/icon.svg" alt="UBI Caucus Logo" />
        <span class="open-ubi-banner-text">
          This site is part of the UBI Caucus ↗</span
        >
      </div>
    </a>
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
@import url("https://rsms.me/inter/inter.css");
html {
  font-family: "inter", sans-serif;
}
@supports (font-variation-settings: normal) {
  html {
    font-family: "Inter var", sans-serif;
  }
}

#app {
  height: 100vh;
  background: #ccc;
}

.open-ubi-banner {
  background: #243665;
  color: white;
  font-weight: 400;
  display: block;
  text-decoration: none;
  font-family: "Inter";
}

.open-ubi-banner-inner {
  margin-left: auto;
  margin-right: auto;
  max-width: 1264px;
  width: 100%;
  padding: 2rem;
}

.open-ubi-banner-inner {
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  opacity: 0.8;
  transition: opacity 200ms ease-in-out;
}

.open-ubi-banner img {
  height: 1rem;
  margin-right: 0.5rem;
}

.open-ubi-banner:hover .open-ubi-banner-inner {
  opacity: 1;
}

.caucus-link {
  color: white;
}

p a {
  text-decoration: none;
  font-weight: bold;
  color: hsl(203, 89%, 53%);
}
</style>
