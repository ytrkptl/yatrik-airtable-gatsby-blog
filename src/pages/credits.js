import React from "react"
import AirtableLayout from "../components/layout/airtable-layout"
import SEO from "../components/seo"
import {
  StyledCreditsDiv,
  StyledCreditsTitle,
  StyledCreditsSpan,
  StyledFlaticonDiv
} from "../pages-styles/credits.styles"

export default () => {
  const dataArray = [
    "Andrei Neagoie",
    "Zhang Yihua",
    "W3Schools",
    "https://blog.airtable.com/build-your-own-custom-blog-cms-with-airtable-and-gatsbyjs/",
    "https://www.eggradients.com/",
    "https://webgradients.com/",
    "Unsplash.com",
    `and lots more I'm sure`
  ]
  return (
    <AirtableLayout>
      <SEO title="Credits" />
      <StyledCreditsDiv>
        <StyledCreditsTitle>Credits / Resources</StyledCreditsTitle>
        {dataArray.map((item, index) => (
          <StyledCreditsSpan key={index}>{item}</StyledCreditsSpan>
        ))}
        <StyledFlaticonDiv>Icons made by {` `}
          <a  href="https://www.flaticon.com/authors/geotatah" 
              title="geotatah" 
              style={{color: 'var(--themeTextColor)'}}
          >geotatah</a> 
          {` `}from 
          <a  href="https://www.flaticon.com/" 
              style={{color: 'var(--themeTextColor)'}}
              title="Flaticon"
          >www.flaticon.com</a> is licensed by 
          <a  href="http://creativecommons.org/licenses/by/3.0/"                 
              title="Creative Commons BY 3.0" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{color: 'var(--themeTextColor)'}}
          >CC 3.0 BY</a>
        </StyledFlaticonDiv>        
      </StyledCreditsDiv>
    </AirtableLayout>
  )
}
