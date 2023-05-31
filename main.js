const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2E2ZWJkYzZkZTMxMjlhZjdiMmUxMDk1ZjkyMWU1NyIsInN1YiI6IjY0NzY5NDZmMDA1MDhhMDBkY2M0NGY3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EYrFrQEeZAAo1l2F1zH7b7wKq81JGCBX_xNeHBCG1CU",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
