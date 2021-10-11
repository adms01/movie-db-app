import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import MovieFeed from "./MovieFeed";
import { getMostRecentMovies, getMovieBySearch } from "../api/api";
import axios from "axios";

const App = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    let source = axios.CancelToken.source();

    (async () => {
      const data = await getMostRecentMovies(page, setError, source);
      setMovies(data.results);
    })();

    return () => {
      source.cancel();
    };
  }, [page]);

  useEffect(() => {
    let source = axios.CancelToken.source();
    (async () => {
      const data = await getMovieBySearch(query, page, setError, source);
      setResults(data?.results);
    })();

    return () => {
      source.cancel();
    };
  }, [query]);

  return (
    <S.AppContainer>
      <Header query={query} setQuery={setQuery} />

      {query && <MovieFeed title="Results" data={results} />}
      {!query && <MovieFeed title="Most Recent Movies" data={movies} />}
    </S.AppContainer>
  );
};

export default App;

const S = {};

S.AppContainer = styled.div`
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
`;
