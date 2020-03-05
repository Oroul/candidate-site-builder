<template>
  <div>
    <div v-if="twitterIds.includes($route.params.id)">
      <Candidate v-bind:candidate="getCandidate($route.params.id)" />
    </div>
    <div v-else id="candidate-404">
      <div id="question-mark">
        <div>?</div>
      </div>
      <h3>No candidate found!</h3>
      <p>
        There is no candidate associated with this Twitter handle. If you would
        like an automated website for this candidate, please fill out the form
        below.
      </p>
      <b-button
        class="btn btn-info btn-xl"
        href="https://docs.google.com/forms/d/e/1FAIpQLSecum17d1BhF_PBkhis6oKiw5oEAIW_VE4uepcipaKNG4ej0g/viewform"
      >
        New Candidate Form
      </b-button>
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

<style scoped>
#candidate-404 {
  display: grid;
  justify-items: center;
  padding-top: 2em;
}

#question-mark {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10em;
  background: #ddd;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  margin-bottom: 0.2em;
}

p {
  padding: 1.5em;
}
</style>
