import styled, { css } from 'styled-components';
import VectorLeft from "../../images/vectorPrevious.svg";
import VectorLeftBlue from "../../images/vectorPreviousBlue.svg";
import VectorRight from "../../images/vectorNext.svg";
import VectorRightBlue from "../../images/vectorNextBlue.svg";

export const PaginationContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 28px auto;
gap: 12px;
width: 525px; 
background-color: ${({ theme }) => theme.colors.lightgray}; 

@media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
        margin: 42px auto;
        gap: 8px;
      }
`;

export const PageButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; 
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

      @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
        background-image: url(${VectorRight}), url(${VectorRight});
        background-position: 12px center, right 12px center;
        background-repeat: no-repeat, no-repeat; 
        padding: 8px 12px;
        width: 38px;
      }
      `}`;

export const Pages = styled.div` 
  display: flex;
  align-items: center;  
  gap: 8px;
  
  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) { 
    gap: 2px; 
  }
`;

export const PageText = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 24px;
  font-size: 16px;
  line-height: 150%; 
  color: ${({ theme }) => theme.colors.darkerGray}; 

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 10px;
    gap: 2px;
  }
`;

export const PageCount = styled.span` 
font-weight: 600;
font-size: 16px;
line-height: 150%;
color: ${({ theme }) => theme.colors.black};

@media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
  font-size: 10px; 
}
`;

export const StyledSpan = styled.span`

@media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
  display: none;
}
`;