import styled, { css } from "styled-components";
import { Link } from "gatsby"

export const StyledFooter = styled.footer`
  background-color: var(--footerBgColor);
  color: var(--textNormal);
  transition: color 0.2s ease-out, background 0.2s ease-out;
  position: sticky;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  padding: 4%;
  right: 0;
  left: 0;
  box-sizing: border-box;
  
  a {
    color: var(--footerLinkColor);
    text-decoration: none;
  }
  @media screen and (max-width: 400px) {
    max-width: 100vw;
  }
`
export const StyledFooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 20px;
  background-color: var(--footerBgColor);
  color: var(--textNormal);
  width: 100%;
  padding: 4%;
  grid-gap: 4%;

  @media screen and (max-width: 400px) {
    width: 400px;
    grid-gap: 1%;
    padding-left: 0;
    padding-right: 0;

  }
`
const StyledColumn = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 20px;
`;
export const StyledColumn1 = styled.div`
  ${StyledColumn};
`
export const StyledColumn2 = styled.div`
  ${StyledColumn};
`
export const StyledColumn3 = styled.div`
  ${StyledColumn};

  & a {
    margin: 10px 0px;
  }
`
export const StyledText = styled.p`
  padding-bottom: 4px;
  margin: 10px 0px;
  // margin-block-start: 0;
  // margin-block-end: 0;
`

export const StyledFooterLink = styled(Link)`
  text-decoration: none;
  color: var(--footerLinkColor);
  margin: 10px 0px;
  padding-bottom: 10px;
  
  &:hover {
    text-decoration: underline;
  }
`;


// export const StyledGitHubLink = styled.img`
//   width: 54px;
// `

export const Row2 = styled.div`
  grid-column-start: span 3;
  grid-row-start: 2;
  font-family: 'Maiandra GD', 'Roboto', sans-serif;
  justify-self: center;
  align-self: center;
  min-height: 4%;
  margin: 4% auto;

`