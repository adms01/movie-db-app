import React, { useEffect } from "react";
import styled from "styled-components";
import close_icon from "../assets/images/close-icon.svg";
import moment from "moment";
import { device } from "../assets/styles/breakpoints";

function Modal({ isOpen, setIsOpen, title, cover, releaseDate, rating, voteCount, overview }) {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const formattedDate = moment(releaseDate).format("MMM D, YYYY");

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div>
          <S.Overlay onClick={() => handleClick(!isOpen)} />
          <S.ModalContainer>
            <S.Content>
              <div className="modal-header">
                <h3>{title}</h3>
                <img src={close_icon} alt="close popup" className="close-modal" onClick={handleClick} />
              </div>

              <div className="modal-inner">
                <div className="modal-content-left">
                  <img src={`${process.env.REACT_APP_API_BASE_IMAGE_URL}${cover}`} alt="" />
                </div>

                <div className="modal-content-right">
                  {releaseDate && (
                    <span className="modal-release-date">
                      <span className="bold">Release date: </span>
                      {formattedDate}
                    </span>
                  )}

                  {overview && <span>{overview}</span>}

                  {rating && (
                    <span className="modal-content-rating">
                      <span className="bold">{rating}</span>/10 ({voteCount} total votes)
                    </span>
                  )}
                </div>
              </div>
            </S.Content>
          </S.ModalContainer>
        </div>
      )}
    </>
  );
}

export default Modal;

const S = {};

S.Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 400;
  top: 0;
  left: 0;
  background-color: #000000b2;
  overflow-x: hidden;
  transition: 0.5s;
`;

S.ModalContainer = styled.div`
  position: fixed;

  left: 35%;
  top: 20%;
  width: 30%;
  height: auto;
  /* height: 474px; */
  background-color: #fdfffc;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  z-index: 500;
  color: #011627;

  @media ${device.tablet} {
    width: 100%;
    left: 0;
    top: 0;
    height: 100%;
  }
`;

S.Content = styled.div`
  padding: 20px 27px;

  .modal-header {
    font-size: 18px;
    /* margin-top: 20px; */
    margin-bottom: 16px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .close-modal {
    height: 24px;
    width: 24px;
    cursor: pointer;
  }

  .modal-inner {
    display: flex;
  }

  .modal-content-left {
    img {
      max-width: 266px;
      max-height: 389px;
      min-width: 150px;
      width: 100%;
      object-fit: contain;
    }
  }

  .modal-content-right {
    margin-left: 22px;
    display: flex;
    flex-direction: column;
    max-width: 241px;
    font-size: 14px;
  }

  .modal-release-date {
    margin-bottom: 16px;
  }

  .modal-content-rating {
    margin-top: 16px;
  }

  @media ${device.tablet} {
    .modal-content-right {
      margin-bottom: 20px;
    }
  }

  @media ${device.laptop} {
    .modal-inner {
      flex-direction: column-reverse;
      align-items: center;
    }

    .modal-content-right {
      max-width: 100%;
    }

    .modal-content-left {
      img {
        width: 100px;
      }
    }
  }
`;
