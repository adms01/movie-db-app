import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "./Modal";

function MovieCard({ title, rating, cover, releaseDate, voteCount, overview }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <S.MovieCard onClick={() => setIsOpen(!isOpen)}>
        {rating && <S.Rating>{rating}</S.Rating>}
        {cover ? <S.Poster src={`${process.env.REACT_APP_API_BASE_IMAGE_URL}${cover}`} alt="" /> : <p>No cover</p>}
        {title && (
          <S.TitleContainer>
            <p>{title}</p>
          </S.TitleContainer>
        )}
      </S.MovieCard>

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={title}
        cover={cover}
        releaseDate={releaseDate}
        rating={rating}
        voteCount={voteCount}
        overview={overview}
      />
    </>
  );
}

export default MovieCard;

const S = {};

S.MovieCard = styled.div`
  height: 348px;
  width: 282px;
  border: 1px solid #e1e3e6;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  margin-bottom: 26px;
  box-shadow: 1px 2px 8px 2px #0000001a;
`;

S.Rating = styled.div`
  position: absolute;
  top: 14px;
  left: 14px;
  border: 1px solid black;
  border-radius: 50px;
  display: inline-block;
  padding: 5px;
  background-color: #fff;
`;

S.Poster = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 9px;
  object-fit: fill;
`;

S.TitleContainer = styled.div`
  background-color: #fff;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  font-size: 16px;
  padding: 15px 0;
`;
