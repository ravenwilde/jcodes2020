import React, { useEffect } from "react"
import styled, { withTheme } from "styled-components"

const Container = styled.div`
  height: 100%;
`

const Background = ({ children, theme, view }) => {
  useEffect(() => {
    console.log("useEffect ===>", view)
    document.body.style.backgroundColor = theme[view].hex
  })

  return <Container view={view}>{children}</Container>
}

export default withTheme(Background)
