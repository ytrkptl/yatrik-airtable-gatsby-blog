import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
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
} from "../pages-styles/index.styles"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <PostWrapperParent>
        <IndexHeader>See all my blogs below</IndexHeader>
        <p>{data.allAirtable.totalCount} Posts</p>
        {data.allAirtable.edges.map(({ node }) => (
          <PostWrapper key={node.id}>
            <BlogLink to={node.data.slug}>
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
                  <ImageStyle src={node.data.image[0].url} alt="blog-image" />
                </ImageContainer>
                <StyledExcerpt>{node.data.excerpt}</StyledExcerpt>
              </ImageAndTextGrid>
            </ImageAndTextDiv>
          </PostWrapper>
        ))}
      </PostWrapperParent>
    </Layout>
  )
}

export const query = graphql`
  query {
    allAirtable(
      sort: { fields: [data___date, data___createdTime], order: [DESC, DESC] }
    ) {
      edges {
        node {
          data {
            slug
            title
            author
            image {
              url
            }
            date
            formattedDate
            excerpt
            createdTime
          }
          id
        }
      }
      totalCount
    }
  }
`
