import PropTypes from "prop-types"
import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import {
  StyledDiv,
  StyledH2,
  StyledHeader,
  StyledHeaderLink,
  Overlay,
  OverlayContent,
  StyledOverlayLinkButton,
  StyledOverlayLink,
} from "./header.styles"
import "./header-toggle.css"
import "./hamburger.css"

const Header = ({ siteTitle }) => {
  const hamburgerRef = React.createRef()
  const menuRef = React.createRef()

  const toggleFunc = () => {
    hamburgerRef.current.classList.toggle("change")
    if (hamburgerRef.current.className === "hamburgerContainer") {
      closeNav()
    } else {
      openNav()
    }
  }
  const openNav = () => {
    menuRef.current.style.height = "100%"
  }
  const closeNav = () => {
    menuRef.current.style.height = "0%"
  }
  let pathName = ''
  if (typeof window !== `undefined`) {
    pathName = window.location.pathname
  }
  
  return (
    <StyledHeader>
      <StyledDiv>
        <StyledH2>
          <StyledHeaderLink to="/">{siteTitle}</StyledHeaderLink>
        </StyledH2>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label className="switch">
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
              />
              <span className="amPmEmoji"></span>
              <span className="amPmText"></span>
            </label>
          )}
        </ThemeToggler>
        <div id="menu">
          <Overlay ref={menuRef} id="myNav">
            <OverlayContent id="overlay-content">
              {pathName === "/submit-a-new-post/" ? (
                <StyledOverlayLinkButton onClick={toggleFunc}>
                  Submit a blog post!
                </StyledOverlayLinkButton>
              ) : (
                <StyledOverlayLink to="/submit-a-new-post/">
                  Submit a blog post!
                </StyledOverlayLink>
              )}
              {pathName === "/gallery-view/" ? (
                <StyledOverlayLinkButton onClick={toggleFunc}>
                  Switch to Gallery View
                </StyledOverlayLinkButton>
              ) : (
                <StyledOverlayLink to="/gallery-view/">
                  Switch to Gallery View
                </StyledOverlayLink>
              )}
              {pathName === "/aboutme/" ? (
                <StyledOverlayLinkButton onClick={toggleFunc}>
                  About Me
                </StyledOverlayLinkButton>
              ) : (
                <StyledOverlayLink to="/aboutme/">About Me</StyledOverlayLink>
              )}
              {pathName === "/credits/" ? (
                <StyledOverlayLinkButton onClick={toggleFunc}>
                  Credits
                </StyledOverlayLinkButton>
              ) : (
                <StyledOverlayLink to="/credits/">Credits</StyledOverlayLink>
              )}
            </OverlayContent>
          </Overlay>
          <span onClick={toggleFunc} id="hamburgerRef">
            <div ref={hamburgerRef} className="hamburgerContainer">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </span>
        </div>
      </StyledDiv>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
