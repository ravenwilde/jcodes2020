import Color from "color"
import PropTypes from "prop-types"
import React, { Fragment } from "react"
import { animated, useSpring } from "react-spring"
import styled, { withTheme } from "styled-components"

import { min } from "../../utils/mediaQueries"
import { rhythm } from "../../utils/typography"

import SocialLinks from "../socials"

const H1 = styled(animated.h1)`
text-align: center;
font-size: ${rhythm(1.2)};
margin: 0;

@media (${min.sm}) {
  font-size: ${rhythm(2)};
}
@media (${min.lg}) {
  font-size: ${rhythm(3)};
`

const Div = styled(animated.div)`
  display: block;
`

const P = styled(animated.p)`
  line-height: 1.1;
  text-align: center;
  font-size: ${rhythm(0.8)};
  margin-bottom: ${rhythm(1)};

  span {
    display: block;
  }

  @media (${min.sm}) {
    font-size: ${rhythm(1.1)};
  }
  @media (${min.lg}) {
    font-size: ${rhythm(1.5)};
  }
`

const Hello = ({ siteTitle, theme, view }) => {
  const compactView = view === "resume";

  const h1Spring = useSpring({
    color: Color(theme[view].hex).lighten(0.99).hex(),
    marginBottom: !compactView ? rhythm(1) : "0em",
    marginTop: !compactView ? rhythm(4) : "0em",
  });
  const divSpring = useSpring({
    display: !compactView ? "block" : "none",
    opacity: !compactView ? 1 : 0,
  });
  const textSpring = useSpring({
    color: Color(theme[view].hex).lighten(0.99).hex(),
  });

  return (
    <Fragment>
      <H1 style={h1Spring} view={view}>{siteTitle}</H1>
      {!compactView && (
        <Div style={divSpring}>
          <P style={textSpring}>
            <span>Frontend Web</span>
            <span>Applications Engineer</span>
          </P>
          <SocialLinks theme={theme} />
        </Div>
      )}
    </Fragment>
  );
}

Hello.propTypes = {
  siteTitle: PropTypes.string,
  view: PropTypes.string,
}

export default withTheme(Hello);
