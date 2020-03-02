<template>
  <div id="profile">
    <div id="candidate-details">
      <img
        id="candidate-image"
        v-bind:src="
          'https://avatars.io/twitter/' + candidate.twitterId + '/large'
        "
      />
      <h2 id="candidate-name">{{ candidate.fullName }}</h2>
    </div>
    <p id="candidate-bio">{{ candidate.bio }}</p>
  </div>
</template>

<script>
export default {
  name: "candidate",
  props: ["candidate"]
};
</script>

<style scoped>
#profile {
  padding: 2em;
  background: linear-gradient(180deg, #2f2e2e 10.5em, #ccc 10.6em);
}

#candidate-details {
  width: 16.5em;
  text-align: center;
}

#candidate-name {
  padding-top: 0.4em;
}

#candidate-image {
  border: 0.2em solid black;
  border-radius: 50%;
}

#candidate-bio {
  margin-top: 2em;
  min-height: 8em;
  padding: 1em;
  background: #ddd;
  border: 0.2em solid #fff;
  border-radius: 0.2em;
}
</style>
