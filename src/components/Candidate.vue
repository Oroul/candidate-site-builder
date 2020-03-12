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
    <span id="candidate-keywords">{{ candidate.keywords }}</span>
    <div id="contact">
      <twitter-button class="contact-button" :candidate="candidate" />
      <b-button
        v-if="candidate.email"
        class="contact-button"
        variant="light"
        :href="'mailto:' + candidate.email"
        >📧 Email
      </b-button>
      <facebook-button
        v-if="candidate.facebookId"
        class="contact-button"
        :candidate="candidate"
      />
    </div>
    <div v-if="candidate.phone" id="phone-number">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 39 39"
      >
        <path
          fill="#00E676"
          d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"
        ></path>
        <path
          fill="#FFF"
          d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"
        ></path>
      </svg>
      <b> {{ candidate.phone }}</b>
    </div>
    <p id="candidate-bio">{{ candidate.bio }}</p>
    <h3>My Pledge</h3>
    <p id="pledge">
      <i>{{ candidate.pledge }}</i>
    </p>
  </div>
</template>

<script>
import VueLoadImage from "vue-load-image";
import TwitterButton from "./TwitterButton.vue";
import FacebookButton from "./FacebookButton.vue";

export default {
  name: "candidate",
  props: ["candidate"],
  data() {
    return {
      src: "https://avatars.io/twitter/" + this.candidate.twitterId + "/large"
    };
  },
  components: {
    "vue-load-image": VueLoadImage,
    "twitter-button": TwitterButton,
    "facebook-button": FacebookButton
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

#candidate-keywords {
  text-align: center;
  padding-bottom: 0.9em;
}

#contact {
  display: flex;
}

.contact-button {
  margin: 0.2em;
}

#phone-number {
  background: #ddd;
  padding: 0.4em;
  margin: 0.2em;
  margin-top: 1em;
  border: 0.1em solid #bbb;
  border-radius: 0.3em;
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
  margin-top: 1em;
  min-width: 20em;
  max-width: 50%;
  min-height: 8em;
  padding: 1em;
  background: #ddd;
  border: 0.1em solid #bbb;
  border-radius: 0.2em;
}

#pledge {
  min-width: 20em;
  max-width: 50%;
}

img {
  background: #ccc;
  min-width: 262px;
  min-height: 262px;
  border: 0.2em solid black;
  border-radius: 50%;
}
</style>
