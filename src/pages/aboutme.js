import React from "react";
import AirtableLayout from "../components/layout/airtable-layout";
import Seo from "../components/seo";
import { StyledCreditsDiv, StyledCreditsTitle, StyledAboutMeSpan } from "../pages-styles/credits.styles";

const AboutMePage = () => {
  const dataArray = [
    `I am a Software Engineer at Virginia Tech, committed to continuous growth and excelling in learning new skills. In my current role, I leverage PHP for backend development and Vue.js for frontend development, designing and maintaining internal departmental web applications. My work focuses on creating REST APIs, dynamic front-end features, and optimizing full-stack solutions. My passion for learning is reflected in both my self-directed skill acquisition and formal education, including my pursuit of a Master of Information Technology at Virginia Tech. Prior to transitioning into tech, I spent 8 years as a licensed math teacher, where I developed the versatility and problem-solving skills that continue to drive my success across new disciplines.`
  ];
  return (
    <AirtableLayout>
      <StyledCreditsDiv>
        <StyledCreditsTitle>About Me</StyledCreditsTitle>
        {dataArray.map((item, index) => (
          <StyledAboutMeSpan key={index}>{item}</StyledAboutMeSpan>
        ))}
      </StyledCreditsDiv>
    </AirtableLayout>
  );
};

export default AboutMePage;

export const Head = () => <Seo title="About Me" />;
