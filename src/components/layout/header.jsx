import Color from "color"
import PropTypes from "prop-types"
import React from "react"
import { animated, useSpring } from "react-spring"
import styled, { withTheme } from "styled-components"

import { min } from "../../utils/mediaQueries"
import { rhythm } from "../../utils/typography"

import ErrorBoundary from "../errorBoundary"
import Nav from "./nav";

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
  justify-content: flex-end;
  align-items: center;
  height: 50%;
  width: 100%;
  margin: ${rhythm(2)} auto 0;
  max-width: 900px;
  position: relative;
`

const ContentCard = styled(animated.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  height: ${rhythm(4)};
  padding: 0px ${rhythm(1)};
  position: absolute;
  width: 100%;
  @media (${min.sm}) {
    height: ${rhythm(3)};
  }
  @media (${min.lg}) {
    height: ${rhythm(6)};
  }
`

const H1 = styled(animated.h1)`
  font-size: ${rhythm(1.2)};
  margin: 0;
  text-align: center;
  @media (${min.sm}) {
    font-size: ${rhythm(1.5)};
  }
  @media (${min.lg}) {
    font-size: ${rhythm(3)};
  }
`

const About = styled.p`
  font-size: ${rhythm(0.5)};
  line-height: ${rhythm(1)};
  margin: 0;
  text-align: center;
  @media (${min.sm}) {
    font-size: ${rhythm(0.75)};
    line-height: ${rhythm(1.2)};
  }
  @media (${min.lg}) {
    font-size: ${rhythm(1)};
    line-height: ${rhythm(1.5)};
  }
`

const Header = ({ about, onChange, siteTitle, theme, view }) => {
  const headerSpring = useSpring({
    height: view !== "resume" ? "100vh" : "35vh",
  })
  const textSpring = useSpring({
    paddingBottom: view !== "resume" ? rhythm(1.5) : '0em',
    color: Color(theme[view].hex).lighten(0.99).hex(),
  });

  const { transform, opacity } = useSpring({
    opacity: view !== "about" ? 1 : 0,
    transform: `perspective(600px) rotateX(${view !== "about" ? 180 : 0}deg)`,
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
            }}
            view={view}
          >
            <H1 style={textSpring} view={view}>{siteTitle}</H1>
          </ContentCard>
          <ContentCard
            style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
            view={view}
          >
            <About view={view}>{about}</About>
          </ContentCard>
        </Content>
        <Nav onChange={onChange} view={view}/>
      </ErrorBoundary>
    </HeaderStyled>
  )
}

Header.propTypes = {
  about: PropTypes.string,
  siteTitle: PropTypes.string,
  onChange: PropTypes.func,
  view: PropTypes.string,
}

Header.defaultProps = {
  about: `About text default`,
  siteTitle: ``,
  view: `index`,
}

export default withTheme(Header)
