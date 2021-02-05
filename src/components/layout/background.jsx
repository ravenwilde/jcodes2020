import React, { useEffect } from "react"
import { animated, useSpring } from "react-spring"
import styled, { withTheme } from "styled-components"

const Container = styled(animated.div)`
  height: 100%;
`

const Background = ({ children, theme, view }) => {
  useEffect(() => {
    document.body.style.backgroundColor = theme[view].hex
  })
  const spring = useSpring({
    background: theme[view].hex,
  })

  return <Container style={spring} view={view}>{children}</Container>
}

export default withTheme(Background)
