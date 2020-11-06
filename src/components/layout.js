import React from "react"
import { animated, useSpring } from "react-spring"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import { TypographyStyle, GoogleFont } from "react-typography"

import { palettes } from "../utils/colors"
import typography, { rhythm } from "../utils/typography"

import Background from "./background"
import Header from "./header"

import "./global.css"

const Main = styled(animated.main)`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 ${rhythm(1)};
`

const Layout = ({ about, children, onChange, view }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const mainSpring = useSpring({
    height: view !== "resume" ? "0vh" : "65vh",
    paddingBottom: view !== "resume" ? rhythm(4) : rhythm(),
  })

  return (
    <ThemeProvider theme={palettes.miamiSunset}>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
      <Background view={view}>
        <Header
          about={about}
          onChange={onChange}
          siteTitle={data.site.siteMetadata?.title || `Title`}
          view={view}
        />
        <Main style={mainSpring} view={view}>
          {children}
        </Main>
      </Background>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  about: PropTypes.string,
  children: PropTypes.node,
  onChange: PropTypes.func,
  view: PropTypes.string,
}

export default Layout
