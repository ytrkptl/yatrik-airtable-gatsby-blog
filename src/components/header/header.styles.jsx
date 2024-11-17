import styled from "styled-components"
import { Link } from "gatsby"

export const StyledHeader = styled.header`
  background: var(--headerTextBg);
  height: auto;
  width: 100%;

  @media screen and (max-width: 600px) {
    width: 100vw;
  }
`
export const StyledDiv = styled.div`
  display: grid;
  align-items: center;
  max-width: 960px;
  padding: 10px;
  margin: auto;
  grid-template-columns: 9.6fr 1.2fr 1.2fr;

  @media screen and (max-width: 400px) {
    grid-template-columns: 7.6fr 2.2fr 2.2fr;
  }
`
export const StyledH2 = styled.h1`
  margin: 0;
  padding: 0 0 0 10px;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  font-family: Segoe UI, sans-serif;

  & a {
    color: var(--headerText);

    &:hover {
      color: var(--headerTextHovered);
    }
  }

  @media screen and (max-width: 400px) {
    padding-left: unset;
  }
`

export const StyledHeaderLink = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 400px) {
    font-size: 22px;
  }
`
export const Overlay = styled.div`
  height: 0;
  width: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: var(--overlayBg);
  overflow: hidden;
  transition: 0.5s;
`
export const OverlayContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`
export const StyledOverlayLinkButton = styled.button.attrs({ type: "button" })`
  text-decoration: none;
  text-align: center;
  font-size: 28px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  color: var(--overlayLink);
  margin: 20px;
  display: flex;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--overlayLinkHovered);
    transform: scale(1.1);
  }

  &:focus {
    color: var(--overlayLinkHovered);
  }
`
export const StyledOverlayLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  font-size: 28px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  color: var(--overlayLink);
  margin: 20px;
  display: flex;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--overlayLinkHovered);
    transform: scale(1.1);
  }

  &:focus {
    color: var(--overlayLinkHovered);
  }
`

export const ChangeThemeButton = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: var(--headerText);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--headerTextHovered);
    transform: scale(1.1);
  }

  &:focus {
    color: var(--headerTextHovered);
  }

  .amPmEmoji {
    font-size: 1.5rem;
  }
`;