import {
  StyledFoot,
  StyledHead,
  StyledHeading,
  StyledSection,
  StyledContent,
  StyledTiles,
} from "./styled";

export const Section = ({ title, movies, people, content, foot, fullpage }) => (
  <StyledSection fullpage={fullpage}>
    <StyledHead>
      <StyledHeading>{title}</StyledHeading>
    </StyledHead>
    <StyledContent>
      <StyledTiles movies={movies} people={people}>
        {content}
      </StyledTiles>
    </StyledContent>
    <StyledFoot>{foot}</StyledFoot>
  </StyledSection>
);
