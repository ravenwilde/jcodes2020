import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import { TypographyStyle, GoogleFont } from "react-typography"

import { palettes } from "../utils/colors"
import typography, { rhythm } from "../utils/typography"

import Header from "./header"

import "./global.css"

const Main = styled.main`
  margin: 0 auto;
  max-width: 860px;
  padding: 0px ${rhythm(0.5)} ${rhythm(8)};
  transition: padding 0.5s ease;
`

const Layout = ({ children, onChange }) => {
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
    <ThemeProvider theme={palettes.grayScale}>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
      <Header
        onChange={onChange}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <Main>{children}</Main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
