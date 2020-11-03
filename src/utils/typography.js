import Typography from "typography"
import typeTheme from "typography-theme-fairy-gates"

import { defaultColor } from "./colors"

const linkColor = defaultColor.hex

typeTheme.overrideThemeStyles = ({ scale, rhythm }, options) => ({
  a: {
    color: linkColor,
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${linkColor} 1px, ${linkColor} 2px, rgba(0, 0, 0, 0) 2px)`, // eslint-disable-line
  },
})

const typography = new Typography(typeTheme)

export const { scale, rhythm, options } = typography
export default typography
