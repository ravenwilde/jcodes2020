import PropTypes from "prop-types"
import React from "react"
import { TypographyStyle, GoogleFont } from "react-typography"
import { ThemeProvider } from "styled-components"

import { palettes } from "../../utils/colors"
import typography from "../../utils/typography"

import Background from "./background"
import SEO from "./seo"

import "./global.css"

const Layout = ({ children, title, view }) => {
  return (
    <ThemeProvider theme={palettes.miamiSunset}>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
      <SEO title={title} />
      <Background view={view}>
        {children}
      </Background>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  view: PropTypes.string,
}

export default Layout
