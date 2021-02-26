import Color from "color"
import PropTypes from "prop-types"
import React from "react"
import { animated, useSpring } from "react-spring"
import styled, { withTheme } from "styled-components"

import { min } from "../../../utils/mediaQueries"
import { rhythm } from "../../../utils/typography"

const ButtonStyled = styled(animated.button)`
  background-color: transparent;
  border: 0;
  display: inline-block;
  flex-grow: 1;
  margin-bottom: 0;
  margin-top: 0; 
  margin-left: 2px;
  margin-right: 2px;
  overflow: visible;

  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;

  /* Normalize line-height. Cannot be changed from normal in Firefox 4+. */
  line-height: normal;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  /* Corrects inability to style clickable input types in iOS */
  -webkit-appearance: none;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    color: ${props => props.view === props.value
      ? Color(props.theme[props.view].hex).lighten(0.9).hex()
      : Color(props.theme[props.view].hex).lighten(0.6).hex()
    };
  }
  &:focus {
    border: 0;
    outline: 0;
  }

  &:first-child {
    border-radius: 20px 0 0 20px;
    margin-left: 0;
  }
  &:last-child {
    border-radius: 0 20px 20px 0;
    margin-right: 0;
  }

  font-size: ${rhythm(0.5)};
  padding: ${rhythm(0.5)} ${rhythm(0.5)};

  @media (${min.xs}) {
    font-size: ${rhythm(0.75)};
    padding: ${rhythm(0.75)} ${rhythm(0.75)};
  }

  @media (${min.sm}) {
    font-size: ${rhythm(1)};
    padding: ${rhythm(0.75)} ${rhythm(1)};
  }
}
`

const Button = ({ value, view, theme, ...props }) => {
  const btnSpring = useSpring({
    color: view === value
      ? Color(theme[view].hex).lighten(0.5).hex()
      : Color(theme[view].hex).darken(0.4).hex(),
  });
  return (
    <ButtonStyled style={btnSpring} value={value} view={view} theme={theme} {...props} />
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  view: PropTypes.string,
}

Button.defaultProps = {
  view: `index`,
}

export default withTheme(Button);
