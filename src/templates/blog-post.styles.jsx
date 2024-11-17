import styled from "styled-components";

export const BlogPostWrapperParent = styled.div`
  margin-left: 4%;
  margin-right: 4%;
  max-width: 960px;
  overflow-x: hidden;

  @media screen and (max-width: 400px) {
    max-width: 90%;
    padding: 0;
    margin: 0;
  }
`;
export const BlogPostImageContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 700px;
  margin: auto;

  @media screen and (max-width: 600px) {
    max-width: 100%;
    max-height: 40%;
  }
`;
export const BlogPostImage = styled.img`
  display: block;
  margin: 10px;
  max-width: 600px;
  max-height: 600px;
  width: auto;
  height: auto;

  @media screen and (max-width: 600px) {
    max-width: 100%;
    max-height: 50vh;
  }
`;

export const BlogPostMarkdownOrOther = styled.div`
  min-height: 80vh;
  max-width: 100%;
`;

export const StyledExcerpt = styled.div`
  width: 100%;
  box-sizing: border-box;
  line-height: 1.3em;

  @media screen and (max-width: 600px) {
    margin: 0px;
    padding-left: 10px;
  }
`;
