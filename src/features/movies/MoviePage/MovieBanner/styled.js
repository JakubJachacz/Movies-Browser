import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../../../images/star.svg";

export const StyledMovieBanner = styled.div`
  width: 100%;
  min-height: 769px;
  background-color: ${({ theme }) => theme.colors.deepBlack};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
    min-height: 211px;
  }
`;

export const BackdropWrapper = styled.div`
  max-width: 1368px;
  min-height: 769px;
  position: relative;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
    min-height: 100px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    grid-gap: 8px;
    min-height: 211px;
  }
`;

export const Backdrop = styled.img`
  width: 100%;
  display: block;
`;

export const Vineta = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.gradient};
  background-position: center;
  background-size: 130%;
  position: absolute;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-content: end;
  align-items: end;

  @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    grid-gap: 8px;
  }
`;

export const MovieTitle = styled.h2`
  margin: 0 15px;
  font-weight: 600;
  font-size: 64px;
  color: ${({ theme }) => theme.colors.white};
  line-height: ${({ theme }) => theme.lineHeight.xs};
  transition: 0.2s;

  @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
    font-size: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 24px;
  }
`;

export const MovieRating = styled.div`
  margin: 0 15px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
    display: flex;
    align-items: flex-end;
    margin-bottom: 20px;
    gap: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
    gap: 8px;
  }
`;

export const RateWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4px;
    align-items: flex-end;
  }
`;

export const StyledStarIcon = styled(StarIcon)`
  width: 40px;
  height: 40px;
  margin-right: 8px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    width: 16px;
    height: 16px;
    margin-right: 0px;
  }
`;

export const Rate = styled.span`
  font-size: 30px;
  font-weight: 500;
  margin-right: 7px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 14px;
    margin-right: 0px;
  }
`;

export const MaxRate = styled.span`
  font-size: 16px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 10px;
  }
`;

export const Votes = styled.span`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 56px;

  @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
    font-size: 10px;
    margin-bottom: 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 10px;
    margin-bottom: 0px;
  }
`;
