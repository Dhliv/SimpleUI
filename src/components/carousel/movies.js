const MOCK_IMAGE1 = "https://m.media-amazon.com/images/M/MV5BMjdkZjNjNDItYzc4MC00NTkxLTk1MWEtY2UyZjY5MjUwNDNkXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_.jpg";
const MOCK_TITLE1 = "The Mitchells VS The Machines"
const YEAR1 = 2021;
const GENRE1 = "Animation";

const MOCK_IMAGE2 = "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg";
const MOCK_TITLE2 = "Avatar: The Way of Water"
const YEAR2 = 2022;
const GENRE2 = "Sci-fi";

const MOCK_IMAGE3 = "https://m.media-amazon.com/images/M/MV5BNjMyMDBjMGUtNDUzZi00N2MwLTg1MjItZTk2MDE1OTZmNTYxXkEyXkFqcGdeQXVyMTQ5NjA0NDM0._V1_FMjpg_UX1000_.jpg";
const MOCK_TITLE3 = "Puss in Boots: The Last Wish"
const YEAR3 = 2022;
const GENRE3 = "Animation";

const MOCK_IMAGE4 = "https://m.media-amazon.com/images/I/51TXaigVBHL._AC_UF894,1000_QL80_.jpg";
const MOCK_TITLE4 = "Shrek"
const YEAR4 = 2001;
const GENRE4 = "Animation";

const breadcrumbs = ["Today", "This week", "Last 30 days"];

let movies = [];

function todayMovies() {
  let movies = [];

  for (let i = 0; i < 10; i++) {
    if (i < 5) {
      movies.push({
        title: MOCK_TITLE1,
        image: MOCK_IMAGE1,
        year: YEAR1,
        genre: GENRE1
      });
    } else {
      movies.push({
        title: MOCK_TITLE2,
        image: MOCK_IMAGE2,
        year: YEAR2,
        genre: GENRE2
      });
    }
  }

  return movies;
}

function weekMovies() {
  let movies = [];

  for (let i = 0; i < 10; i++) {
    if (i < 5) {
      movies.push({
        title: MOCK_TITLE2,
        image: MOCK_IMAGE2,
        year: YEAR2,
        genre: GENRE2
      });
    } else {
      movies.push({
        title: MOCK_TITLE3,
        image: MOCK_IMAGE3,
        year: YEAR3,
        genre: GENRE3
      });
    }
  }

  return movies;
}

function monthMovies() {
  let movies = [];

  for (let i = 0; i < 10; i++) {
    if (i < 5) {
      movies.push({
        title: MOCK_TITLE3,
        image: MOCK_IMAGE3,
        year: YEAR3,
        genre: GENRE3
      });
    } else {
      movies.push({
        title: MOCK_TITLE4,
        image: MOCK_IMAGE4,
        year: YEAR4,
        genre: GENRE4
      });
    }
  }

  return movies;
}

function getMovies(category) {
  if (category == breadcrumbs[0]) return todayMovies();
  if (category == breadcrumbs[1]) return weekMovies();
  return monthMovies();
}

export { getMovies }