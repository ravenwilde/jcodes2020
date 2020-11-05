import PropTypes from "prop-types"
import React from "react"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

import ErrorBoundary from "./errorBoundary"

const HeaderStyled = styled(animated.header)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
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

const Nav = styled(animated.nav)`
  margin: 0 auto;
  max-width: 600px;
  padding-left: ${rhythm(1)};
  padding-right: ${rhythm(1)};
  width: 100%;
`

const Select = styled.select`
  display: block;
  width: 100%;
`

const ContentCard = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${rhythm(4)};
  padding: 0px ${rhythm(1)};
  position: absolute;
  width: 100%;
  @media (min-width: 30em) {
    height: ${rhythm(3)};
  }
  @media (min-width: 60em) {
    height: ${rhythm(6)};
  }
`

const H1 = styled.h1`
  font-size: ${rhythm(1.2)};
  margin: 0;
  text-align: center;
  @media (min-width: 30em) {
    font-size: ${rhythm(1.5)};
  }
  @media (min-width: 60em) {
    font-size: ${rhythm(3)};
  }
`

const About = styled.p`
  font-size: ${rhythm(0.5)};
  line-height: ${rhythm(1)};
  margin: 0;
  text-align: center;
  @media (min-width: 30em) {
    font-size: ${rhythm(0.75)};
    line-height: ${rhythm(1.2)};
  }
  @media (min-width: 60em) {
    font-size: ${rhythm(1)};
    line-height: ${rhythm(1.5)};
  }
`

const Header = ({ about, onChange, siteTitle, view }) => {
  const headerSpring = useSpring({
    height: view !== "resume" ? "100vh" : "35vh",
  })

  const { transform, opacity } = useSpring({
    opacity: view !== "about" ? 1 : 0,
    transform: `perspective(600px) rotateX(${view !== "about" ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  const navSpring = useSpring({
    paddingBottom: view !== "resume" ? rhythm(4) : rhythm(),
    paddingTop: view !== "resume" ? rhythm(2) : rhythm(),
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
            <H1 view={view}>{siteTitle}</H1>
          </ContentCard>
          <ContentCard
            style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
            view={view}
          >
            <About view={view}>{about}</About>
          </ContentCard>
        </Content>
        <Nav style={navSpring} view={view}>
          <Select onChange={onChange} name="siteNav">
            <option value="index">Hello</option>
            <option value="about">About</option>
            <option value="resume">Resume</option>
          </Select>
        </Nav>
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

export default Header
