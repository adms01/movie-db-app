import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import MovieFeed from "./MovieFeed";
import { getMostRecentMovies, getMovieBySearch } from "../api/api";

const App = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState();

  useEffect(() => {
    (async () => {
      const data = await getMostRecentMovies(page);
      setMovies(data.results);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await getMovieBySearch(query, page);
      setResults(data?.results);
    })();
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
