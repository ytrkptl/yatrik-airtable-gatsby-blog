import styled, { css } from "styled-components";

export const StyledCreditsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 80vh;
  max-width: 100%;
`;

export const StyledCreditsTitle = styled.h2`
  padding: 20px;
  margin-bottom: 40px;
  transform: skew(-20deg);
  font-size: 28px;
  border: 1px solid black;
  font-family: "Maiandra GD", Roboto, sans-serif;
  color: var(--creditsHeaderText);
  background-image: var(--creditsHeaderBg);
`;
const StyledSpanOrDiv = css`
  margin: 10px;
  padding: 10px 60px;
  font-size: 24px;
  border-radius: 55px 0px;
  color: white;
  font-family: "Maiandra GD";
  background-color: var(--creditListBgColor);
  background-image: var(--creditsListBgImage);
  max-width: 100%;
`;

export const StyledCreditsSpan = styled.span`
  ${StyledSpanOrDiv}
`;
export const StyledFlaticonDiv = styled.div`
  ${StyledSpanOrDiv}
`;

export const StyledAboutMeSpan = styled.span`
  margin: 10px;
  padding: 40px 60px;
  font-size: 24px;
  border-radius: 55px 0px;
  color: white;
  font-family: "Maiandra GD";
  background-color: var(--creditListBgColor);
  background-image: var(--creditsListBgImage);
`;

export const ThemeMessageForAirtable = styled.h4`
  color: var(--themeTextColor);
  justify-content: center;
  display: var(--themeMessageForAirtable);
`;
