import React, { Fragment } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { min } from "../utils/mediaQueries"
import { rhythm } from "../utils/typography"


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

const HR = styled.hr`
  width: 100%;
  margin: ${rhythm(2)} auto;
`

const Footer = styled.p`
  padding: ${rhythm()} 0 ${rhythm(4)};
  text-align: center;
`

const Resume = ({ resume }) => (
  <ResumeContent>
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
        <HR />
      </Fragment>
    ))}
    <Footer>
      Expanded CV available on{" "}
      <Link to={"https://linkedin.com/in/jenniferascroggins/"}>LinkedIn</Link>
    </Footer>
  </ResumeContent>
)

export default Resume
