import PropTypes from "prop-types"
import React from "react"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const Button = styled.button`
  border: none;
  margin: 0 ${rhythm(0.5)};
  padding: ${rhythm(0.25)} ${rhythm(0.75)};
  width: auto;
  overflow: visible;

  background: transparent;

  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;

  font-size: ${rhythm(1)};

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
`

export default Button
