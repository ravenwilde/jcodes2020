import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const HeaderStyled = styled.header`
  position: relative;
  padding: ${rhythm(2)} ${rhythm(0.5)};
  transition: padding 0.5s ease;
  @media (min-width: 50em) {
    padding: ${rhythm(4)} ${rhythm(1)};
  }
`

const H1 = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: ${rhythm(1)};
  transition: font-size 0.5s ease;
  text-align: center;
  @media (min-width: 30em) {
    font-size: ${rhythm(2)};
  }
  @media (min-width: 60em) {
    font-size: ${rhythm(3)};
  }
`

const Nav = styled.nav`
  margin: ${rhythm(4)} auto 0};
  max-width: 600px;
`

const Select = styled.select`
  display: block;
  width: 100%;
`

const Header = ({ onChange, siteTitle }) => (
  <HeaderStyled>
    <H1>{siteTitle}</H1>
    <Nav>
      <Select onChange={onChange}>
        <option value="index">I am a...</option>
        <option value="resume">Engineer</option>
      </Select>
    </Nav>
  </HeaderStyled>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  onChange: PropTypes.func,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
