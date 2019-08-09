import styled from "styled-components"

export const BlogPostWrapperParent = styled.div`
  margin-left: 4%;
  margin-right: 4%;
  max-width: 960px;
  overflow-x: hidden;

  @media screen and (max-width: 400px) {
    max-width: 90%;
    margin-left: none;
    margin-right: none;
    padding: 0;
    margin: 0;
  }
`
export const BlogPostImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  max-width: 90vw;
  margin: auto;
`
export const BlogPostImage = styled.img`
  display: block;
  margin: 10px;
  width: 100%;
  height: auto;
  max-width: 600px;
 
`

export const StyledExcerpt = styled.div`
  width: 100%;
  box-sizing: border-box;
  line-height: 1.3em;

  @media screen and (max-width: 600px) {
    margin: 0px;
    padding-left: 10px;
  }
`;
