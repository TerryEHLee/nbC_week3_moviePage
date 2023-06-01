// DOMContentLoaded 이벤트 핸들러
document.addEventListener("DOMContentLoaded", function () {
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
        let id = number.id;

        let cardSpread = `<div class="cardClass">
          <div class="card" id="${id}">
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

      // 카드 클릭 시 alert 창
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        card.addEventListener("click", function () {
          let id = this.getAttribute("id");
          alert("해당 영화의 id는 " + id + "입니다.");
        });
      });
    })
    .catch((err) => console.error(err));

  // 검색
  const searchForm = document.querySelector(".searchBar");
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const searchInput = document
      .getElementById("searchInput")
      .value.toLowerCase();

    const cards = document.querySelectorAll(".card");
    const cardBox = document.querySelector(".cardBox");
    cards.forEach(function (card) {
      const title = card.querySelector(".title").textContent.toLowerCase();
      if (title.includes(searchInput)) {
        cardBox.prepend(card); // 검색된 카드를 가장 앞으로 이동
        card.style.display = "block"; // 필터링된 영화 카드 표시
      } else {
        card.style.display = "none"; // 필터링되지 않은 영화 카드 숨김
      }
    });
  });
});
