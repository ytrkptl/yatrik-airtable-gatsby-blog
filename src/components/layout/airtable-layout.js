import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "../footer/footer"
import Header from "../header/header"
import { DivInLayout } from "./layout.styles"
import "./layout.css"

const AirtableLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQueryAgain {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <DivInLayout>
        {children}
      </DivInLayout>
      <Footer />
    </>
  )
}

AirtableLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AirtableLayout
