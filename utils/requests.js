export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${process.env.API_KEY}&language=en-us`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${process.env.API_KEY}&language=en-us`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${process.env.API_KEY}&language=en-us`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${process.env.API_KEY}&language=en-us`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${process.env.API_KEY}&language=en-us`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${process.env.API_KEY}&language=en-us`,
  },
  fetchTv: {
    title: "Tv Movie",
    url: `/discover/movie?api_key=${process.env.API_KEY}&language=en-us`,
  },
  fetchMysteryMovies: {
    title: "Mystery",
    url: `/discover/movie?api_key=${process.env.API_KEY}&language=en-us`,
  },
  fetchScFi: {
    title: "Sc-Fi",
    url: `/discover/movie?api_key=${process.env.API_KEY}&language=en-us`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${process.env.API_KEY}&language=en-us`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${process.env.API_KEY}&language=en-us`,
  },
};