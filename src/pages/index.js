import React, { useState } from "react"
import { Link } from "gatsby"
import { reduce, assign } from "lodash"

import Layout from "../components/layout"
import Resume from "../components/resume"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const [view, setView] = useState("index")

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

  return (
    <Layout onChange={handleChange}>
      <SEO title="Home" />
      {view === "resume" && content.resume && (
        <Resume resume={content.resume} />
      )}
    </Layout>
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
  }
`
