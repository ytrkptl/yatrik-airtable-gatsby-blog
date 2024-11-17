import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import {
  PostWrapperParent,
  IndexHeader,
  PostWrapper,
  BlogLinkAndEmojiWrapper,
  EmojiStyle,
  BlogLink,
  BlogTitle,
  ImageAndTextDiv,
  ImageAndTextGrid,
  ImageContainer,
  ImageStyle,
  StyledExcerpt
} from "../pages-styles/index.styles";

const HomePage = ({ data }) => {
  const images = data?.allAirtable.edges
    .map(({ node }) => node.data.imageName)
    .map((imageName) => {
      // if imageName has a comma, split it and return the first part
      let imageToUse = imageName;
      if (imageName.includes(",")) {
        imageToUse = imageName.split(",")[0];
      }
      return `https://res.cloudinary.com/dun1b4fpw/image/upload/f_auto,q_auto,w_auto,h_340/v1730337029/airtable-gatsby-blog/${imageToUse}.jpg`;
    });

  return (
    <Layout>
      <PostWrapperParent>
        <IndexHeader>See all my blogs below</IndexHeader>
        <p>{data?.allAirtable.totalCount} Posts</p>
        {data?.allAirtable.edges.map(({ node }, index) => (
          <PostWrapper key={node.id}>
            <BlogLink to={`/${node.data.slug}`}>
              <BlogTitle>
                <BlogLinkAndEmojiWrapper>
                  {node.data.title}
                  <EmojiStyle />
                </BlogLinkAndEmojiWrapper>
              </BlogTitle>
            </BlogLink>
            <p>{node.data.formattedDate}</p>
            <ImageAndTextDiv>
              <ImageAndTextGrid>
                <ImageContainer>
                  <ImageStyle
                    // src={node.data.image[0].url}
                    src={images[index]}
                    alt="blog-image"
                  />
                </ImageContainer>
                <StyledExcerpt>{node.data.excerpt}</StyledExcerpt>
              </ImageAndTextGrid>
            </ImageAndTextDiv>
          </PostWrapper>
        ))}
      </PostWrapperParent>
    </Layout>
  );
};

export default HomePage;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export const query = graphql`
  query {
    allAirtable(sort: { data: { createdTime: DESC } }) {
      edges {
        node {
          data {
            slug
            title
            author
            image {
              url
            }
            formattedDate
            excerpt
            createdTime
            imageName
          }
          id
        }
      }
      totalCount
    }
  }
`;
