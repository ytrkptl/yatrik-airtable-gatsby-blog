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
            <a  href="https://www.gatsbyjs.org" 
                target="_blank"
                rel="noopener noreferrer"
            >Gatsby</a>
          </StyledText>
        </StyledColumn1>
        <StyledColumn2>
          <StyledFooterLink to="/gallery-view/">Switch to Gallery View</StyledFooterLink>
          <StyledFooterLink to="/aboutme/">About Me</StyledFooterLink>
          <StyledFooterLink to="/credits/">Credits</StyledFooterLink>
        </StyledColumn2>
        <StyledColumn3>
          <a  href="https://github.com/ytrkptl/yatrik-airtable-gatsby-blog" 
              target="_blank"
              rel="noopener noreferrer"
          >GitHub</a>
        </StyledColumn3>
        <Row2>Created by: --- Yatrik Patel --- July 31, 2019</Row2>
      </StyledFooterGrid>
      </StyledFooter>
  )
}

export default Footer
