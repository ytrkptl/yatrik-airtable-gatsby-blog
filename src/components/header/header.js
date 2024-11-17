import React, { useState, useEffect } from "react"
import {
  StyledDiv,
  StyledH2,
  StyledHeader,
  StyledHeaderLink,
  Overlay,
  OverlayContent,
  StyledOverlayLinkButton,
  StyledOverlayLink,
  ChangeThemeButton,
} from "./header.styles"
import "./header-toggle.css"
import "./hamburger.css"

const Header = ({ siteTitle }) => {
  const hamburgerRef = React.createRef();
  const menuRef = React.createRef();
  const [theme, setTheme] = useState("dark");

  // Load the initial theme from localStorage or default to light
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);
    document.body.className = storedTheme; // Apply the theme class to body
  }, []);

  const toggleFunc = () => {
    hamburgerRef.current.classList.toggle("change");
    if (hamburgerRef.current.className === "hamburgerContainer") {
      closeNav();
    } else {
      openNav();
    }
  };
  const openNav = () => {
    menuRef.current.style.height = "100%";
  };
  const closeNav = () => {
    menuRef.current.style.height = "0%";
  };

  const onKeyPressFunc = (event) => {
    if (event.key === "Enter") {
      toggleFunc();
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className = newTheme;
  };

  let pathName = "";
  if (typeof window !== `undefined`) {
    pathName = window.location.pathname;
  }

  return (
    <StyledHeader>
      <StyledDiv>
        <StyledH2>
          <StyledHeaderLink to="/">{siteTitle}</StyledHeaderLink>
        </StyledH2>
        <ChangeThemeButton onClick={toggleTheme} theme={theme}>
          <span className="amPmEmoji"></span>
          <label className="amPmText"></label>
        </ChangeThemeButton>
        <div id="menu">
          <Overlay
            ref={menuRef}
            id="myNav">
            <OverlayContent id="overlay-content">
              {pathName === "/submit-a-new-post/" ? (
                <StyledOverlayLinkButton onClick={toggleFunc}>Submit a blog post!</StyledOverlayLinkButton>
              ) : (
                <StyledOverlayLink to="/submit-a-new-post/">Submit a blog post!</StyledOverlayLink>
              )}
              {pathName === "/gallery-view/" ? (
                <StyledOverlayLinkButton onClick={toggleFunc}>Switch to Gallery View</StyledOverlayLinkButton>
              ) : (
                <StyledOverlayLink to="/gallery-view/">Switch to Gallery View</StyledOverlayLink>
              )}
              {pathName === "/aboutme/" ? (
                <StyledOverlayLinkButton onClick={toggleFunc}>About Me</StyledOverlayLinkButton>
              ) : (
                <StyledOverlayLink to="/aboutme/">About Me</StyledOverlayLink>
              )}
              {pathName === "/credits/" ? (
                <StyledOverlayLinkButton onClick={toggleFunc}>Credits</StyledOverlayLinkButton>
              ) : (
                <StyledOverlayLink to="/credits/">Credits</StyledOverlayLink>
              )}
            </OverlayContent>
          </Overlay>
          <span
            onClick={toggleFunc}
            onKeyDown={(event) => onKeyPressFunc(event)}
            id="hamburgerRef"
            role="button"
            tabIndex={0}>
            <div
              ref={hamburgerRef}
              className="hamburgerContainer">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </span>
        </div>
      </StyledDiv>
    </StyledHeader>
  );
}

export default Header
