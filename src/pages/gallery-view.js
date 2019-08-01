import React from "react"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import SEO from "../components/seo"
import { ThemeMessageForAirtable } from "../pages-styles/credits.styles"

const GalleryView = () => {
  return (
    <>
      <Header siteTitle={`Yatrik's Airtable Gatsby Blog`} />
      <SEO title="Gallery View Gatsby Airtable" />
      <main>
        <ThemeMessageForAirtable>
          The Airtable content below does not support the dark theme. Sorry! 
          <span role="img" aria-label="Sad face">😞</span><span role="img" aria-label="folded hands">🙏🏼</span>
        </ThemeMessageForAirtable>
        <iframe
          className="airtable-embed"
          id="hmm"
          src="https://airtable.com/embed/shr2k9cYEmii3YW8Z?backgroundColor=purple&viewControls=on"
          frameborder="0"
          width="100%"
          height="700"
          title="gallery-view"
          style={{
            background: "transparent",
            border: "1px solid #ccc",
          }}
        ></iframe>
      </main>
      <Footer />
    </>
  )
}

export default GalleryView
