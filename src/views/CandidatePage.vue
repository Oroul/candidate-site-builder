<template>
  <div>
    <div v-if="twitterIds.includes($route.params.id)">
      <Candidate v-bind:candidate="getCandidate($route.params.id)" />
    </div>
    <div v-else>
      <h3>No candidate found!</h3>
      <p>
        There is no candidate associated with this Twitter handle. If you would
        like an automated website for this candidate, please fill out the form
        <a href="#">here</a>
      </p>
    </div>
  </div>
</template>

<script>
import Candidate from "../components/Candidate.vue";
import candidates from "../candidates.json";

export default {
  name: "candidates",
  components: {
    Candidate
  },
  data() {
    return {
      candidates: candidates
    };
  },
  methods: {
    getCandidate(id) {
      return this.candidates.filter(c => c.twitterId === id)[0];
    }
  },
  computed: {
    twitterIds() {
      return this.candidates.map(c => c.twitterId);
    }
  }
};
</script>
