import React, { Fragment } from "react"
import styled from "styled-components"
import Color from "color"
import { Link } from "gatsby"

import { min } from "../utils/mediaQueries"
import { scale, rhythm } from "../utils/typography"

import SocialLinks from "./socials"

const getColorByType = (type, theme) => {
  switch (type) {
    case "behavior":
      return theme.light.hex
    case "style":
      return theme.midLight.hex
    case "php":
      return theme.dark.hex
    case "tooling":
      return theme.midDark.hex
    case "api":
      return theme.primary.hex
    default:
      return theme.primary.hex
  }
}

const ResumeContent = styled.div`
  h1,h2,h3,h4,h5,h6 {
    color: ${props => props.theme.header.hex}
  }
  p, ul, li, span, blockquote {
    color: ${props => props.theme.header.hex}
  }
  a {
    color: ${props => props.theme.link.hex}
    &:hover {
      color: ${props => props.theme.link.hex}
    }
  }
`

const H3 = styled.h3`
  display: flex;
  flex-direction: column;
`

const H4 = styled.h4`
  opacity: 0.75;
`

const TwoCol = styled.span`
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  @media (${min.md}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: ${props => props.marginBottom};
  }
`

const TwoColCell = styled.span`
  margin-bottom: ${rhythm(0.5)};
  @media (${min.md}) {
    margin-bottom: ${rhythm(0.25)};
  }
`

const TitleSpan = styled(TwoColCell)`
  padding-right: ${rhythm(0.5)};
`

const InfoSpan = styled(TwoColCell)`
  font-size: ${rhythm(3 / 4)};
  opacity: 0.75;
`

const UL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`

const LI = styled.li`
  margin-right: ${rhythm(1 / 2)};
  padding: ${rhythm(1 / 8)} ${rhythm(1 / 4)};
  font-size: ${rhythm(1 / 2)};
`

const HR = styled.hr`
  width: 100%;
  margin: ${rhythm(2)} auto;
`

const Footer = styled.p`
  text-align: center;
`

const Resume = ({ resume }) => (
  <ResumeContent>
    <h2>Experience</h2>
    <HR />
    {resume.experience.map(e => (
      <Fragment key={`${e.title}_${e.start_date}`}>
        <H3>
          <TwoCol>
            <TitleSpan>{e.title}</TitleSpan>
            <InfoSpan>{`${e.start_date} → ${e.end_date}`}</InfoSpan>
          </TwoCol>
          <TwoCol>
            <InfoSpan>{e.employer}</InfoSpan>
            <InfoSpan>{e.location}</InfoSpan>
          </TwoCol>
        </H3>
        <p>{e.description}</p>
        {e.tech && (
          <Fragment>
            <H4>Tech</H4>
            <UL>
              {e.tech.map((t, i) => (
                <LI type={t.type} key={`${t.tag}_${i}`}>
                  {t.tag}
                </LI>
              ))}
            </UL>
          </Fragment>
        )}
        <HR />
      </Fragment>
    ))}
    <Footer>
      Expanded CV available on{" "}
      <a href={"https://linkedin.com/in/jenniferascroggins/"}>LinkedIn</a>{" "}
      &raquo;
    </Footer>
  </ResumeContent>
)

export default Resume
