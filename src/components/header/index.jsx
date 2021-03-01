import PropTypes from "prop-types"
import React from "react"
import { animated, useSpring } from "react-spring"
import styled, { withTheme } from "styled-components"

import { rhythm } from "../../utils/typography"

import ErrorBoundary from "../errorBoundary"
import Nav from "../nav";

import Hello from "./hello";
import Experience from "./experience";

const HeaderStyled = styled(animated.header)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  nav {
    color: ${props => props.theme.header.hex};
  }
  p {
    color: ${props => props.theme.header.hex};
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
  margin: 0 auto;
  max-width: 900px;
  position: relative;
  overflow: hidden;
`

const ContentCard = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 ${rhythm(1)};
  position: absolute;
  width: 100%;
`

const Header = ({ onChange, siteTitle, theme, view }) => {
  const headerSpring = useSpring({
    height: view !== "resume" ? "100vh" : "35vh",
  })

  const { transform, opacity, zIndex } = useSpring({
    opacity: view !== "about" ? 1 : 0,
    transform: `perspective(600px) rotateX(${view !== "about" ? 180 : 0}deg)`,
    zIndex: view !== "about" ? 1 : 0,
    config: { mass: 5, tension: 500, friction: 80 },
  })


  return (
    <HeaderStyled style={headerSpring} view={view}>
      <ErrorBoundary name="Header">
        <Content>
          <ContentCard
            style={{
              opacity,
              transform: transform.interpolate(t => `${t} rotateX(180deg)`),
              zIndex,
            }}
            view={view}
          >
            <Hello siteTitle={siteTitle} view={view} />
          </ContentCard>
          <ContentCard
            style={{
              opacity: opacity.interpolate(o => 1 - o),
              transform,
              zIndex: zIndex.interpolate(z => 1 - z),
            }}
            view={view}
          >
            <Experience view={view} />
          </ContentCard>
        </Content>
        <Nav onChange={onChange} view={view}/>
      </ErrorBoundary>
    </HeaderStyled>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  onChange: PropTypes.func,
  view: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  view: `index`,
}

export default withTheme(Header)
