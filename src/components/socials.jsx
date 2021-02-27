import React from "react"
import styled from "styled-components"

import GitHubIconLink from "./icons/github"
import LinkedInIconLink from "./icons/linkedin"

import { min } from "../utils/mediaQueries"

const Links = styled.div`
  display: flex;
  align: center;
  justify-content: center;
  width: 100%;
  
  a {
    margin: 0 0.5em;
  }
`

const SocialLinks = ({ theme }) => {
  return (
    <Links theme={theme}>
      <GitHubIconLink />
      <LinkedInIconLink />
    </Links>
  )
}

export default SocialLinks
