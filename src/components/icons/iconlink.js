import styled from "styled-components"
import Color from "color"

import { min } from "../../utils/mediaQueries"

const IconLink = styled.a`
  display: block;
  width: 32px;
  height: 32px;
  color: ${props => Color(props.theme.primary.hex).darken(0.4).hex()};
  transition: all 0.3s ease;
  background-image: none;
  &:focus,
  &:hover {
    color: ${props => Color(props.theme.primary.hex).lighten(0.5).hex()};
    cursor: pointer;
    outline: none;
  }
  @media (${min.md}) {
    width: 40px;
    height: 40px;
  }
  @media (${min.md}) {
    width: 48px;
    height: 48px;
  }
`

export default IconLink
