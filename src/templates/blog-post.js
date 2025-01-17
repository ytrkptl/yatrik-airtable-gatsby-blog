import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import { unified } from "unified";
import markdown from "remark-parse";
import html from "remark-html";
import {
  BlogPostWrapperParent,
  BlogPostImageContainer,
  BlogPostImage,
  BlogPostMarkdownOrOther
} from "./blog-post.styles";

const BlogPost = ({ data }) => {
  const post = data.airtable.data;
  const imageName = post.imageName.includes(",") ? post.imageName.split(",")[1] : post.imageName;
  return (
    <Layout>
      <BlogPostWrapperParent>
        <h1>{post.title}</h1>
        <span>Written by {post.author}</span>
        <p>{post.formattedDate}</p>
        <BlogPostImageContainer>
          <BlogPostImage
            src={`https://res.cloudinary.com/dun1b4fpw/image/upload/v1731878936/airtable-gatsby-blog/${imageName}.jpg`}
            alt="blog"
          />
        </BlogPostImageContainer>
        {post.fileType === "Markdown" ? <h3 style={{ textAlign: "center" }}>See Your Markdown post below </h3> : null}
        <BlogPostMarkdownOrOther
          dangerouslySetInnerHTML={{
            __html: unified().use(markdown).use(html).processSync(post.PostMarkdown)
          }}
        />
      </BlogPostWrapperParent>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query ($slug: String!) {
    airtable(data: { slug: { eq: $slug } }) {
      data {
        slug
        title
        author
        PostMarkdown
        image {
          url
        }
        formattedDate
        fileType
        imageName
      }
    }
  }
`;
