import Vue from "vue";
import Router from "vue-router";
import MovieList from "./components/MovieList";
import MovieDetail from "@/components/MovieDetail";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Movie List",
      component: MovieList
    },
    {
      path: "/movie/:id",
      name: "Movie Detail",
      component: MovieDetail
    }
  ]
});
