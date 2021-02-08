import React from "react"
import styled from "styled-components"

import GitHubIconLink from "./icons/github"
import LinkedInIconLink from "./icons/linkedin"

import { min } from "../utils/mediaQueries"

const Links = styled.div`
  align-self: flex-end;
  display: grid;
  grid-template-columns: 32px 32px;
  grid-template-rows: auto;
  grid-gap: 16px;
  @media (${min.sm}) {
    align-self: center;
    grid-template-columns: auto;
    grid-template-rows: 40px 40px;
  }
  @media (${min.md}) {
    grid-gap: 24px;
    grid-template-rows: 48px 48px;
  }
`

const SocialLinks = ({ style }) => {
  return (
    <Links style={style}>
      <GitHubIconLink />
      <LinkedInIconLink />
    </Links>
  )
}

export default SocialLinks