import Color from "color"
import PropTypes from "prop-types"
import React, { Fragment } from "react"
import { animated, useSpring } from "react-spring"
import styled, { withTheme } from "styled-components"

import { min } from "../../utils/mediaQueries"
import { rhythm } from "../../utils/typography"


const Div = styled(animated.div)`
  width: 100%;

  @media (${min.lg}) {
    padding: 0 ${rhythm(2)};
  }

  h2, h3, p {
    line-height: 1.45;
    margin: 0;
  }
  h2 {
    font-size: 3vh;
    margin: 0 0 3vh;
  }
  h3, p {
    font-size: 2vh;
  }
  p {
    margin: 0 0 1vh;
  }
`

const Experience = () => (
  <Div>
    <h2>I design for the internet because I &lt;3 the internet.</h2>

    <h3>Languages:</h3>
    <p>JavaScript, jQuery, React.js, CSS, Sass, Less</p>

    <h3>Presentation:</h3>
    <p>HTML/HTML5, CSS/3, JSX, Markdown, Blade Templates, WordPress Templates, Twig Templates</p>

    <h3>Frameworks/Content Management Systems:</h3>
    <p>React.js, Laravel, CodeIgniter, Symfony, WordPress, PerchCMS, Foundation 5, Twitter Bootstrap, Bourbon/Neat/Bitters/Refills</p>

    <h3>APIs/Libs:</h3>
    <p>Google Maps, Google Charts, Plotly, Charts.js</p>

    <h3>Tools:</h3>
    <p>Git/GitHub, MySQL, SQLite, Composer, Bower, Grunt.js, Gulp, Webpack, Laravel-Elixir</p>

    <h3>Buzzwords:</h3>
    <p>Mobile First, Responsive Design, DRY Coding, Semantic HTML & CSS, MVC - emphasis on the V</p>
  </Div>
);


Experience.propTypes = {
  view: PropTypes.string,
}

Experience.defaultProps = {
  view: `index`,
}

export default Experience;