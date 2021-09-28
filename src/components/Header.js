import React from "react";
import logo from "../assets/images/logo.svg";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import { device } from "../assets/styles/breakpoints";

function Header({ query, setQuery }) {
  return (
    <S.HeaderContainer>
      <div className="header__left">
        <img src={logo} alt="logo" className="logo" onClick={() => setQuery("")} />
      </div>

      <div className="header__right">
        <SearchInput placeholder="Search for a movie" query={query} setQuery={setQuery} />
      </div>
    </S.HeaderContainer>
  );
}

export default Header;

const S = {};

S.HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid #c0c4cc;
  padding: 20px 0;

  .header__left {
    display: flex;
    margin-right: auto;
  }

  .header__right {
    margin-left: 10px;
  }

  .logo {
    max-width: 136px;
    width: 100%;
    object-fit: contain;
    cursor: pointer;
  }

  @media ${device.mobileM} {
    flex-direction: column;

    .header__right {
      margin-top: 20px;
      width: 100%;
      margin-left: 0;
    }

    .feed {
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }
`;
