import Color from "color"
import PropTypes from "prop-types"
import React from "react"
import { animated, useSpring } from "react-spring"
import styled, { withTheme } from "styled-components"

import { rhythm } from "../../utils/typography"

import ErrorBoundary from "../errorBoundary"
import Button from "./button"

const NavStyled = styled(animated.nav)`
  margin: 0 auto;
  max-width: 600px;
  padding-left: ${rhythm(1)};
  padding-right: ${rhythm(1)};
  width: 100%;
`

const ButtonBar = styled(animated.div)`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Nav = ({ theme, onChange, view }) => {
  const navSpring = useSpring({
    paddingBottom: view !== "resume" ? rhythm() : rhythm(),
    paddingTop: view !== "resume" ? rhythm() : rhythm(),
  })
  const barSpring = useSpring({
    background: theme[view].hex,
  })
  return(
    <ErrorBoundary name="Nav">
      <NavStyled style={navSpring} theme={theme} view={view}>
        <ButtonBar style={barSpring} theme={theme} view={view}>
          <Button
            onClick={onChange}
            name="navOne"
            type="button"
            value="index"
            view={view}
          >
            Contact
          </Button>
          <Button
            onClick={onChange}
            name="navTwo"
            type="button"
            value="about"
            view={view}
          >
            Skills
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
    </ErrorBoundary>
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
