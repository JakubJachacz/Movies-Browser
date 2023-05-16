import styled, { css } from 'styled-components';
import VectorLeft from "../images/vectorPrevious.svg";
import VectorLeftBlue from "../images/vectorPreviousBlue.svg";
import VectorRight from "../images/vectorNext.svg";
import VectorRightBlue from "../images/vectorNextBlue.svg";

export const PaginationContainer = styled.div`
  position: absolute;
  bottom: 103px; 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 12px; 
  width: 100%; 

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    gap: 8px;
  }
`;

export const PageButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
  line-height: 20px;
  font-size: 14px;
  max-width: 106px;
  min-width: 29px;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.colors.gray};

  &:active {
    background-color: ${({ theme }) => theme.colors.lightBlue}; 
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    height: 23px; 
    background-size: 5px 8px;
  }

  ${({ isFirst }) =>
    isFirst &&
    css`
      padding: 8px 16px 8px 32px;
      background-image: url(${VectorLeft});
      background-position: 16px center;
      background-repeat: no-repeat;

      &:active { 
        background-image: url(${VectorLeftBlue}), url(${VectorLeftBlue});
        color: ${({ theme }) => theme.colors.mineshaft};
      }

      @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
        background-image: url(${VectorLeft}), url(${VectorLeft});
        background-position: 12px center, right 12px center;
        background-repeat: no-repeat, no-repeat;
        text-indent: -9999px;
        white-space: nowrap;
        padding: 8px 12px;
        width: 38px;
      }
    `}

  ${({ isPrevious, isNext }) => {
    if (isPrevious || isNext) {
      return css`
        padding: 8px ${isNext ? "32px" : "16px"} 8px ${isPrevious ? "32px" : "16px"};
        background-image: url(${isPrevious ? VectorLeft : VectorRight});
        background-position: ${isNext ? "right 16px center" : "16px center"};
        background-repeat: no-repeat;

        &:active { 
          background-image: url(${isPrevious ? VectorLeftBlue : VectorRightBlue}),
            url(${isPrevious ? VectorLeftBlue : VectorRightBlue});
          color: ${({ theme }) => theme.colors.mineshaft};
        }

        @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
          background-image: url(${isPrevious ? VectorLeft : VectorRight}),
            url(${isPrevious ? VectorLeft : VectorRight});
          background-position: center, center;
          background-repeat: no-repeat, no-repeat;
          text-indent: -9999px;
          white-space: nowrap;
          padding: 8px 12px;
        }
      `;
    }
  }}

  ${({ isLast }) =>
    isLast &&
    css`
      padding: 8px 32px 8px 16px;
      background-image: url(${VectorRight});
      background-position: right 16px center;
      background-repeat: no-repeat;

      &:active { 
        background-image: url(${VectorRightBlue}), url(${VectorRightBlue});
        color: ${({ theme }) => theme.colors.mineshaft};
      }

      &:nth-child(2) {
        margin-left: -12px;
        margin-right: 0;
      }

      @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
        background-image: url(${VectorRight}), url(${VectorRight});
        background-position: 12px center, right 12px center;
        background-repeat: no-repeat, no-repeat;
        text-indent: -9999px;
        white-space: nowrap;
        padding: 8px 12px;
        width: 38px;
      }
      `}`;

export const Pages = styled.div` 
  display: flex; 
  align-items: center; 
  flex: none;
  order: 0;
  flex-grow: 0;

  & > * {
    margin-right: -7px;
  }

  & > *:last-child {
    margin-right: 0px
  }
`;

export const PageText = styled.span`
  height: 24px;
  font-size: 16px;
  line-height: 150%; 
  font-weight: 400; 
  color: ${({ theme }) => theme.colors.darkerGray};
  margin-left: 12px;

  &:first-child {
    margin-left: 0px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 10px;

    &:last-child {
      margin-left: 10px;
    }
  }
`;

export const PageCount = styled.span`
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 150%;
color: ${({ theme }) => theme.colors.black};

@media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 10px; 
}
`;