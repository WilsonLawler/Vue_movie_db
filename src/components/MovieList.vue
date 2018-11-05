<template>
    <ul>
        <li v-for="movie in movies">
            <Movie :movie = "movie"/>
        </li>
    </ul>
</template>

<script>
import Movie from "./Movie.vue";
export default {
  name: "MovieList",
  data: function() {
    return {
      movies: []
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=763a001f24857cb0f7e32293197e505a"
        );
        const movies = await res.json();
        this.movies = movies.results;
      } catch (e) {
        console.log(e);
      }
    }
  },
  components: {
    Movie
  }
};
</script>

<style scoped>
ul {
  display: grid;
  list-style-type: none;
  padding: 1rem;
  margin: 0;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
}
</style>