import Color from "color"
import PropTypes from "prop-types"
import React from "react"
import { animated, useSpring } from "react-spring"
import styled, { withTheme } from "styled-components"

import { rhythm } from "../../../utils/typography"

import ErrorBoundary from "../../errorBoundary"
import Button from "./button"

const NavStyled = styled(animated.nav)`
  margin: 0 auto;
  max-width: 600px;
  padding-left: ${rhythm(1)};
  padding-right: ${rhythm(1)};
  width: 100%;
`

const ButtonBar = styled(animated.div)`
  border-radius: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
`

const Nav = ({ theme, onChange, view }) => {
  const navSpring = useSpring({
    paddingBottom: view !== "resume" ? rhythm(4) : rhythm(),
    paddingTop: view !== "resume" ? rhythm(2) : rhythm(),
  })
  const barSpring = useSpring({
    background: theme[view].hex,
    border: `4px solid ${theme[view].hex}`,
    boxShadow: 
      `${Color(theme[view].hex).darken(0.4).fade(0.2).rgb()} 8px 16px 30px 0,
      ${Color(theme[view].hex).lighten(0.15).fade(0.1).rgb()} -8px -8px 40px 0`,
  })
  return(
    <NavStyled style={navSpring} theme={theme} view={view}>
      <ButtonBar style={barSpring} theme={theme} view={view}>
        <Button
          onClick={onChange}
          name="navOne"
          type="button"
          value="index"
          view={view}
        >
          Hello
        </Button>
        <Button
          onClick={onChange}
          name="navTwo"
          type="button"
          value="about"
          view={view}
        >
          About
        </Button>
        <Button
          onClick={onChange}
          name="navThree"
          type="button"
          value="resume"
          view={view}
        >
          Resume
        </Button>
      </ButtonBar>
    </NavStyled>
  );
}

Nav.propTypes = {
  onChange: PropTypes.func,
  view: PropTypes.string,
}

Nav.defaultProps = {
  view: `index`,
}

export default withTheme(Nav);
