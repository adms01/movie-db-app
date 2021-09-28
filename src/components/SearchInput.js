import React from "react";
import styled from "styled-components";
import search_icon from "../assets/images/search-icon.svg";
import { device } from "../assets/styles/breakpoints";

function SearchInput({ placeholder, setQuery }) {
  const updateInputValue = (e) => {
    setQuery(e.target.value);
  };

  return (
    <S.SearchInputContainer>
      <S.SearchIcon src={search_icon} alt="search" />
      <S.Input type="search" placeholder={placeholder} onChange={updateInputValue} />
    </S.SearchInputContainer>
  );
}

export default SearchInput;

const S = {};

S.SearchInputContainer = styled.div`
  display: flex;
  border: 1px solid #c0c4cc;
  border-radius: 2px;
  height: 36px;
  width: 100%;
`;

S.Input = styled.input`
  margin-left: 8px;
  margin-right: 8px;
  border: 0;
  background-color: transparent;
  font-size: 12px;
  color: #898e9a;
  letter-spacing: -1%;
  width: 100%;

  :focus {
    outline: none;
  }
`;

S.SearchIcon = styled.img`
  width: 16px;
  height: auto;
  margin-left: 8px;
`;
