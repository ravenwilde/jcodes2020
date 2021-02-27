import React, { useState } from "react"
import { animated, useSpring } from "react-spring"
import { reduce, assign } from "lodash"
import styled, { ThemeProvider } from "styled-components"

import Header from "../components/header"
import ErrorBoundary from "../components/errorBoundary"
import Layout from "../components/layout"
import Resume from "../components/resume"

import typography, { rhythm } from "../utils/typography"

const Main = styled(animated.main)`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 ${rhythm(1)};
`

const IndexPage = ({ data }) => {
  const [view, setView] = useState("index")
  const [state, setState] = useState("loading")

  const { nodes } = data.allDataJson

  const content = reduce(
    nodes,
    (key, value) => {
      return assign(key, value)
    },
    {}
  )

  const handleChange = e => {
    setView(e.target.value)
  }

  const mainSpring = useSpring({
    height: view !== "resume" ? "0vh" : "65vh",
  })

  return (
    <ErrorBoundary name="Index">
      <Layout
        view={view}
        title={'Hello'}
      >
        <Header
          about={content.resume && content.resume.statement}
          onChange={handleChange}
          siteTitle={data.site.siteMetadata?.title || `Title`}
          view={view}
        />
        <Main style={mainSpring} view={view}>
          <ErrorBoundary name="Main">
            {view === "resume" && content.resume && (
              <Resume resume={content.resume} />
            )}
          </ErrorBoundary>
        </Main>
      </Layout>
    </ErrorBoundary>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allDataJson {
      nodes {
        resume {
          statement
          experience {
            description
            employer
            end_date
            location
            start_date
            tech {
              tag
              type
            }
            title
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
