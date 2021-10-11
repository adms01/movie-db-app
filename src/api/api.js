import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
});

export const getMostRecentMovies = async ({ page }, setError, source) => {
  try {
    const res = await api.get(`/movie/upcoming?query=recent&api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&page=${page}`, {
      cancelToken: source.token,
    });
    return res.data;
  } catch (err) {
    setError(err);
  }
};

export const getMovieBySearch = async (query, page, setError, source) => {
  try {
    const res = await api.get(`/search/collection?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&query=${query}&page=${page}`, {
      cancelToken: source.token,
    });
    return res.data;
  } catch (err) {
    console.log(err);
    setError(err);
  }
};
