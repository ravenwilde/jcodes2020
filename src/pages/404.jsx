import React from "react"
import styled from "styled-components"

import { min } from "../utils/mediaQueries"
import { rhythm } from "../utils/typography"

import Layout from "../components/layout"

const H1 = styled.h1`
  color: #fff;
  font-size: ${rhythm(1.2)};
  margin: ${rhythm(4)} 0 ${rhythm(0.25)};
  text-align: center;
  opacity: 0.5;
  @media (${min.sm}) {
    font-size: ${rhythm(1.5)};
  }
  @media (${min.lg}) {
    font-size: ${rhythm(3)};
  }
`

const P = styled.p`
  color: #fff;
  opacity: 0.75;
  text-align: center;
  font-size: ${rhythm(1.2)};
`;

const NotFoundPage = () => (
  <Layout view={"notFound"} title="404: Not found">
    <H1>404: Not Found</H1>
    <P>You just hit a route that doesn&#39;t exist... the sadness.</P>
  </Layout>
)

export default NotFoundPage
