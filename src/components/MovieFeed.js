import React from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import Modal from "./Modal";
import { device } from "../assets/styles/breakpoints";

function MovieFeed({ title, data }) {
  return (
    <S.MovieFeedContainer>
      <Modal />
      <div className="movie-feed-header">
        <h3>{title}</h3>
      </div>

      <div className="feed">
        {data?.slice(0, 20).map((x) => (
          <MovieCard
            key={x.id}
            title={x.original_title}
            rating={x.vote_average}
            cover={x.poster_path}
            releaseDate={x.release_date}
            voteCount={x.vote_count}
            overview={x.overview}
          />
        ))}
      </div>
    </S.MovieFeedContainer>
  );
}

export default MovieFeed;

const S = {};

S.MovieFeedContainer = styled.div`
  .movie-feed-header {
    margin-top: 37px;
    margin-bottom: 22px;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -1%;
  }

  .feed {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  margin-bottom: 100px;

  @media ${device.tablet} {
    .feed {
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }
`;
