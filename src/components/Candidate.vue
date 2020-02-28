<template>
  <div>
    <div>
      <img
        v-bind:src="'https://twitter.com/' + candidate.twitterId + '/photo'"
      />
    </div>
    <div>
      <h1>{{ candidate.fullName }}</h1>
      <p>{{ candidate.bio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "candidate",
  props: ["candidate"]
};
</script>
