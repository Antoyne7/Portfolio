import VueRouter from "vue-router";
import Vue from "vue";
import projets from "@/components/projets";
import index from "@/components/index";

Vue.use(VueRouter);

const routes = [
  { path: "/projets", component: projets },
  { path: "/", component: index }
];

export default new VueRouter({
  routes
});
