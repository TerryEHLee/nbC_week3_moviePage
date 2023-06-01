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
  .then((data) => {
    let rows = data.results;
    rows.forEach((number) => {
      let title = number.title;
      let overview = number.overview;
      let posterPath = number.poster_path;
      let voteAverage = number.vote_average;

      let cardSpread = `<div class="cardClass">
        <div class="card">
          <div class="imageBox">
            <img src="https://image.tmdb.org/t/p/w300/${posterPath}" class="cardImgTop" alt="image does not loaded">
          </div>
          <div class="cardBody">
            <h5 class="title">${title}</h5>
            <p class="overview">${overview}</p>
            <p class="voteAverage">${voteAverage}</p>
          </div>
        </div>
      </div>`;

      const cardBox = document.querySelector(".cardBox");
      cardBox.insertAdjacentHTML("beforeend", cardSpread);
    });
  })
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
