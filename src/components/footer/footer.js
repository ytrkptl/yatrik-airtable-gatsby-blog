import React from "react"
import { 
  StyledFooter,
  StyledFooterGrid,
  StyledColumn1,
  StyledColumn2,
  StyledColumn3,
  StyledText, 
  StyledFooterLink, 
  Row2
} from "./footer.styles"

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterGrid>
        <StyledColumn1>
          <StyledText>
            © {new Date().getFullYear()}, Built with
            {` `}
            <StyledFooterLink href="https://www.gatsbyjs.org" target="_blank">Gatsby</StyledFooterLink>
          </StyledText>
        </StyledColumn1>
        <StyledColumn2>
          <StyledFooterLink to="/credits/">Submit a blog post!</StyledFooterLink>
          <StyledFooterLink to="/credits/">Switch to Gallery View</StyledFooterLink>
          <StyledFooterLink to="/credits/">About Me</StyledFooterLink>
          <StyledFooterLink to="/credits/">Credits</StyledFooterLink>
        </StyledColumn2>
        <StyledColumn3>
          <StyledFooterLink to="/credits/">GitHub</StyledFooterLink>
        </StyledColumn3>
        <Row2>Created by: --- Yatrik Patel --- July 31, 2019</Row2>
      </StyledFooterGrid>
      </StyledFooter>
  )
}

export default Footer
