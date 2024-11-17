import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { DivInLayout } from "./layout.styles"
import Footer from "../footer/footer"
import Header from "../header/header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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

export default Layout
