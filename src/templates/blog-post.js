import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import unified from "unified"
import markdown from "remark-parse"
import html from "remark-html"

export default ({ data }) => {
  const post = data.airtable.data
  return (
    <Layout>
      <h1>{post.title}</h1>
      <span>Written by {post.author}</span>
      <p>{post.formattedDate}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={post.image[0].url}
          alt="blog"
          style={{ margin: "10px", maxWidth: "50%" }}
        />
      </div>
      {post.fileType === "Markdown" ? (
        <h3 style={{ textAlign: "center" }}>See Your Markdown post below </h3>
      ) : null}
      <div
        style={{ minHeight: "80vh" }}
        dangerouslySetInnerHTML={{
          __html: unified()
            .use(markdown)
            .use(html)
            .processSync(post.PostMarkdown),
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
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
      }
    }
  }
`
