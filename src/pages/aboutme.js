import React from "react"
import AirtableLayout from "../components/layout/airtable-layout"
import SEO from "../components/seo"
import {
  StyledCreditsDiv,
  StyledCreditsTitle,
  StyledAboutMeSpan,
} from "../pages-styles/credits.styles"

export default () => {
  const dataArray = [
    `I am a math teacher who is passionate about becoming a develop.
    I have learned a lot on Udemy recently using Andrei's courses. I 
    hope to win this coding challenge, which is why I have created this
    Gatsby blog. Oh, I love the 'spreadsheet meets database' concept of
    Airtable, hence I incorporated that in here as well. Please excuse
    any mistakes, however, suggestions for improvement are welcomed. `,
  ]
  return (
    <AirtableLayout>
      <SEO title="About Me" />
      <StyledCreditsDiv>
        <StyledCreditsTitle>About Me</StyledCreditsTitle>
        {dataArray.map((item, index) => (
          <StyledAboutMeSpan key={index}>{item}</StyledAboutMeSpan>
        ))}
      </StyledCreditsDiv>
    </AirtableLayout>
  )
}
