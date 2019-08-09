import styled from "styled-components"
import { Link } from "gatsby"

export const PostWrapperParent = styled.div`
  margin-left: 4%;
  margin-right: 4%;
  max-width: 960px;
  overflow-x: hidden;
`

export const IndexHeader = styled.h2`
  margin: 10px auto;
`
export const PostWrapper = styled.div`
  border-top: 1px solid var(--borderDivLine);
  margin-top: 2em;
  max-width: 960px;
  // max-height: 400px;
  overflow: hidden;
`;

export const BlogLinkAndEmojiWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const EmojiStyle = styled.span`
  margin-left: 0.5em;
  margin-bottom: 0.4em;

  &::before {
    content: var(--emoji);
  }
`;

export const BlogLink = styled(Link)`
  text-decoration: none;
  color: var(--blogLink);

  &:hover {
    color: var(--blogLinkHovered);
  }
`;

export const BlogTitle = styled.h2`
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    margin-bottom: 0px;
  }
`;

export const ImageAndTextDiv = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }
`;

export const ImageAndTextGrid = styled.div`
  display: grid;
  grid-template-columns: 3.6fr 8.4fr;
  text-align: left;

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    margin: auto;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 600px) {
    width: 100px;
    height: 100px;
    margin: 4px auto;
  }
`;

export const ImageStyle = styled.img`
  width: 80%;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
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
