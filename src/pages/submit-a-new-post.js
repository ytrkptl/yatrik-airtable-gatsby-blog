import React from "react"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import SEO from "../components/seo"
import { ThemeMessageForAirtable } from "../pages-styles/credits.styles"

const SubmitNewBlogPost = () => {
  return (
    <>
      <Header siteTitle={`Yatrik's Airtable Gatsby Blog`} />
      <SEO title="NewBlogPostForm" />
      <main>
        <ThemeMessageForAirtable>
          The Airtable content below does not support the dark theme. Sorry! 
          <span role="img" aria-label="Sad face">😞</span><span role="img" aria-label="folded hands">🙏🏼</span>
        </ThemeMessageForAirtable>
        <iframe
          className="airtable-embed"
          src="https://airtable.com/embed/shrB97qZD0YbbH8OY?backgroundColor=purple"
          frameBorder="0"
          width="100%"
          height="700"
          title="submit-blog-post"
          style={{ background: "transparent", border: "1px solid #ccc" }}
        ></iframe>
      </main>
      <Footer />
    </>
  )
}

export default SubmitNewBlogPost
