import Vue from "vue";
import VueRouter from "vue-router";
import CandidatePage from "../views/CandidatePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/candidates/:id",
    name: "Candidate",
    component: CandidatePage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
