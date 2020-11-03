import styled from "styled-components"
import Color from "color"

const IconLink = styled.a`
  display: block;
  width: 32px;
  height: 32px;
  color: ${props => Color(props.theme.primary.hex).darken(0.4).hex()};
  transition: all 0.3s ease;
  background-image: none;
  &:hover {
    color: ${props => Color(props.theme.primary.hex).lighten(0.5).hex()};
    cursor: pointer;
  }
  @media (min-width: 50em) {
    width: 40px;
    height: 40px;
  }
  @media (min-width: 50em) {
    width: 48px;
    height: 48px;
  }
`

export default IconLink
