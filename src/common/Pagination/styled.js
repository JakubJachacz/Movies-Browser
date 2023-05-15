import styled from 'styled-components';
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
  background-color: ${({ theme }) => theme.colors.lightgray};
`; 

export const PageButtonsFirst = styled.button` 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
  line-height: 20px;
  font-size: 14px;
  padding: 8px 16px 8px 32px; 
  max-width: 106px;
  min-width: 29px; 
  height: 36px;
  border-radius: 5px;
  border: none;
  background-image: url(${VectorLeft});
  background-position: 16px center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.gray}; 

  &:active {
    background-color: ${({ theme }) => theme.colors.lightblue};
    background-image: url(${VectorLeftBlue}), url(${VectorLeftBlue}); 
    color: ${({ theme }) => theme.colors.mineshaft};
  } 

@media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
  background-image: url(${VectorLeft}), url(${VectorLeft});
    background-position: 16px center, right 16px center;
    background-repeat: no-repeat, no-repeat;
    text-indent: -9999px;
    white-space: nowrap;
    padding: 8px 12px;
  }
`;

export const PageButtonsLast = styled.button` 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; 
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
  padding: 8px 32px 8px 16px;
  line-height: 20px;
  font-size: 14px; 
  max-width: 106px;
  min-width: 29px;
  max-height: 36px;
  min-height: 24px;
  border-radius: 5px;
  border: none;
  background-image: url(${VectorRight});
  background-position: right 16px center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.gray}; 

  &:active {
    background-color: ${({ theme }) => theme.colors.lightblue};
    background-image: url(${VectorRightBlue}), url(${VectorRightBlue}); 
    color: ${({ theme }) => theme.colors.mineshaft};
  } 
  &:nth-child(2) { 
    margin-left: -12px;
    margin-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
  background-image: url(${VectorRight}), url(${VectorRight});
    background-position: 16px center, right 16px center;
    background-repeat: no-repeat, no-repeat;
    text-indent: -9999px;
    white-space: nowrap;
    padding: 8px 12px;
  }
`; // zrobic jeden przycisk uzywajac modyfikatorow

export const Pages = styled.div` 
  display: flex;
  align-items: baseline; 
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
  font-family: 'Poppins', sans-serif;
  font-weight: 400; 
  color: ${({ theme }) => theme.colors.darkergray};
  margin-left: 12px;
`;

export const PageCount = styled.span`
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 150%;
color: ${({ theme }) => theme.colors.black};
`;