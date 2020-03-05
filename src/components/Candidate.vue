<template>
  <div id="profile">
    <div id="candidate-details">
      <div id="candidate-image">
        <vue-load-image class="image-loader">
          <img
            slot="image"
            :src="src"
            :alt="candidate.fullName + ' profile picture'"
          />
          <div slot="preloader" id="preloader">
            <b-spinner></b-spinner>
          </div>
          <div slot="error">Failed to load image</div>
        </vue-load-image>
      </div>
      <h2 id="candidate-name">{{ candidate.fullName }}</h2>
    </div>
    <p id="candidate-bio">{{ candidate.bio }}</p>
  </div>
</template>

<script>
import VueLoadImage from "vue-load-image";

export default {
  name: "candidate",
  props: ["candidate"],
  data() {
    return {
      src: "https://avatars.io/twitter/" + this.candidate.twitterId + "/large"
    };
  },
  components: {
    "vue-load-image": VueLoadImage
  }
};
</script>

<style scoped>
#profile {
  display: grid;
  justify-items: center;
  padding: 2em;
  background: linear-gradient(180deg, #2f2e2e 10.5em, #ccc 10.6em);
}

#candidate-details {
  text-align: center;
}

#candidate-name {
  padding-top: 0.4em;
}

#candidate-image {
  background: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 262px;
  height: 262px;
  border: 0.2em solid black;
  border-radius: 50%;
}

#candidate-bio {
  margin-top: 2em;
  min-width: 50%;
  min-height: 8em;
  padding: 1em;
  background: #ddd;
  border: 0.2em solid #fff;
  border-radius: 0.2em;
}

img {
  background: #ccc;
  min-width: 262px;
  min-height: 262px;
  border: 0.2em solid black;
  border-radius: 50%;
}
</style>
